const Bin = require("../models/Bin");
const Insight = require("../models/Insight");

// GET /dashboard/stats
exports.getStats = async (req, res) => {
  try {
    const totalBins = await Bin.countDocuments();

    // Fixed: Round the average fill percentage
    const avgFill = await Bin.aggregate([
      { $group: { _id: null, avgFill: { $avg: "$bin_fill_percent" } } },
    ]);

    // Fixed: Get top waste type by COUNT, not weight
    const topType = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          count: { $sum: 1 }, // Count occurrences
          totalWeight: { $sum: "$waste_breakdown.weight" },
          binCount: { $addToSet: "$_id" }, // Count unique bins with this waste type
        },
      },
      {
        $addFields: {
          binCount: { $size: "$binCount" }, // Convert to actual count
        },
      },
      { $sort: { count: -1 } }, // Sort by count instead of weight
      { $limit: 1 },
    ]);

    // Get bins near overflow (>= 80% full)
    const binsNearOverflow = await Bin.find(
      { bin_fill_percent: { $gte: 80 } },
      { name: 1, bin_id: 1, bin_fill_percent: 1, ward: 1 }
    )
      .sort({ bin_fill_percent: -1 })
      .limit(200);

    // Get waste type distribution for better insights
    const wasteDistribution = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          count: { $sum: 1 }, // Count occurrences
          totalWeight: { $sum: "$waste_breakdown.weight" },
          avgWeight: { $avg: "$waste_breakdown.weight" },
        },
      },
      { $sort: { count: -1 } }, // Sort by count instead of weight
    ]);

    // Get ward data with average fill levels
    const wardData = await Bin.aggregate([
      {
        $group: {
          _id: "$ward",
          avgFill: { $avg: "$bin_fill_percent" },
          binCount: { $sum: 1 },
          criticalBins: {
            $sum: {
              $cond: [{ $gte: ["$bin_fill_percent", 80] }, 1, 0],
            },
          },
        },
      },
      {
        $project: {
          name: "$_id",
          value: { $round: ["$avgFill", 1] }, // Round to 1 decimal place
          _id: 0,
        },
      },
      { $sort: { name: 1 } }, // Sort alphabetically by ward name
    ]);

    res.json({
      totalBins,
      avgFill: Math.round((avgFill[0]?.avgFill || 0) * 100) / 100,
      topWasteType: topType[0]?._id || null,
      topWasteTypeCount: topType[0]?.count || 0, // Return count instead of weight
      topWasteTypeWeight: topType[0]?.totalWeight || 0, // Keep weight for reference
      binsNearOverflow: binsNearOverflow,
      overflowCount: binsNearOverflow.length,
      wasteDistribution: wasteDistribution.slice(0, 5), // Top 5 waste types by count
      wardData: wardData, // Ward average fill levels
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /dashboard/insights
exports.getInsights = async (req, res) => {
  try {
    const insights = await Insight.find().sort({ generatedAt: -1 }).limit(5);
    res.json(insights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
