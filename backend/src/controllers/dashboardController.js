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

    // Fixed: This aggregation was counting waste entries, not unique waste types
    const topType = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          totalWeight: { $sum: "$waste_breakdown.weight" },
          count: { $sum: 1 }, // Count frequency
          binCount: { $addToSet: "$_id" }, // Count unique bins with this waste type
        },
      },
      {
        $addFields: {
          binCount: { $size: "$binCount" }, // Convert to actual count
        },
      },
      { $sort: { count: -1 } }, // Sort by frequency
      { $limit: 1 },
    ]);

    // Get bins near overflow (>= 80% full)
    const binsNearOverflow = await Bin.find(
      { bin_fill_percent: { $gte: 80 } },
      { name: 1, bin_id: 1, bin_fill_percent: 1, ward: 1 }
    )
      .sort({ bin_fill_percent: -1 })
      .limit(10);

    // Get waste type distribution for better insights
    const wasteDistribution = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          totalWeight: { $sum: "$waste_breakdown.weight" },
          avgWeight: { $avg: "$waste_breakdown.weight" },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } }, // Sort by frequency
    ]);

    // Get ward data with average fill levels
    const wardData = await Bin.aggregate([
      {
        $group: {
          _id: "$ward",
          avgFill: { $avg: "$bin_fill_percent" },
          binCount: { $sum: 1 },
          maxFill: { $max: "$bin_fill_percent" },
          minFill: { $min: "$bin_fill_percent" },
          criticalBins: {
            $sum: {
              $cond: [{ $gte: ["$bin_fill_percent", 80] }, 1, 0],
            },
          },
          totalWeight: {
            $sum: {
              $sum: "$waste_breakdown.weight",
            },
          },
        },
      },
      { $sort: { _id: 1 } }, // Sort by ward name alphabetically
    ]);

    res.json({
      totalBins,
      avgFill: Math.round((avgFill[0]?.avgFill || 0) * 100) / 100, // Round to 2 decimal places
      topWasteType: topType[0]?._id || null,
      topWasteTypeCount: topType[0]?.count || 0,
      topWasteTypeWeight: topType[0]?.totalWeight || 0,
      binsNearOverflow: binsNearOverflow,
      overflowCount: binsNearOverflow.length,
      wasteDistribution: wasteDistribution.slice(0, 5), // Top 5 waste types by frequency
      wardData: wardData.map((ward) => ({
        name: ward._id,
        value: Math.round(ward.avgFill * 100) / 100,
      })),
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
