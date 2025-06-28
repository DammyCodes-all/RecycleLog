const Bin = require("../models/Bin");
const Insight = require("../models/Insight");

// GET /dashboard/stats
exports.getStats = async (req, res) => {
  try {
    const totalBins = await Bin.countDocuments();
    const avgFill = await Bin.aggregate([
      { $group: { _id: null, avgFill: { $avg: "$bin_fill_percent" } } },
    ]);
    const topType = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          totalWeight: { $sum: "$waste_breakdown.weight" },
          count: { $sum: 1 },
        },
      },
      { $sort: { totalWeight: -1 } },
      { $limit: 1 },
    ]);

    // Get bins near overflow (>= 80% full)
    const binsNearOverflow = await Bin.find(
      { bin_fill_percent: { $gte: 80 } },
      { name: 1, bin_id: 1, bin_fill_percent: 1, ward: 1 }
    )
      .sort({ bin_fill_percent: -1 })
      .limit(10);

    res.json({
      totalBins,
      avgFill: avgFill[0]?.avgFill || 0,
      topWasteType: topType[0]?._id || null,
      binsNearOverflow: binsNearOverflow,
      overflowCount: binsNearOverflow.length,
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
