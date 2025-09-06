const Bin = require("../models/Bin");

// GET /leaderboard/regions
exports.regionLeaderboard = async (req, res) => {
  try {
    // Fixed: Aggregate by ward without unwinding to get correct average fill
    const data = await Bin.aggregate([
      {
        $group: {
          _id: "$ward",
          avgFill: { $avg: "$bin_fill_percent" },
          binCount: { $sum: 1 },
          totalWeight: {
            $sum: {
              $sum: "$waste_breakdown.weight",
            },
          },
          maxFill: { $max: "$bin_fill_percent" },
          minFill: { $min: "$bin_fill_percent" },
        },
      },
      { $sort: { avgFill: 1 } }, // least average fill first (best performing)
      { $limit: 10 },
    ]);

    // Map to include rank and round values
    const result = data.map((d, index) => ({
      rank: index + 1,
      region: d._id,
      avgFill: Math.round(d.avgFill * 100) / 100, // Round to 2 decimal places
      totalWeight: Math.round(d.totalWeight * 100) / 100,
      binCount: d.binCount,
      maxFill: d.maxFill,
      minFill: d.minFill,
      score: Math.round((100 - d.avgFill) * 100) / 100, // Performance score (higher is better)
    }));

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /leaderboard/entities
exports.entityLeaderboard = async (req, res) => {
  try {
    // List individual bins sorted by lowest fill percent (best performing)
    const data = await Bin.find(
      {},
      "bin_id name bin_fill_percent ward location waste_breakdown"
    )
      .sort({ bin_fill_percent: 1 })
      .limit(15)
      .lean();

    const result = data.map((d, index) => {
      const totalWeight = d.waste_breakdown.reduce(
        (sum, waste) => sum + waste.weight,
        0
      );

      return {
        rank: index + 1,
        binId: d.bin_id,
        name: d.name,
        fillPercent: d.bin_fill_percent,
        ward: d.ward,
        totalWeight: Math.round(totalWeight * 100) / 100,
        wasteEntries: d.waste_breakdown.length,
        score: Math.round((100 - d.bin_fill_percent) * 100) / 100, // Performance score
        location: d.location,
      };
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /leaderboard/worst-performing
exports.worstPerforming = async (req, res) => {
  try {
    // Show regions/bins that need attention (highest fill percentages)
    const worstRegions = await Bin.aggregate([
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
          totalWeight: {
            $sum: {
              $sum: "$waste_breakdown.weight",
            },
          },
        },
      },
      { $sort: { avgFill: -1 } }, // highest average fill first (worst performing)
      { $limit: 5 },
    ]);

    const worstBins = await Bin.find(
      { bin_fill_percent: { $gte: 80 } },
      "bin_id name bin_fill_percent ward"
    )
      .sort({ bin_fill_percent: -1 })
      .limit(10)
      .lean();

    res.json({
      worstRegions: worstRegions.map((d, index) => ({
        rank: index + 1,
        region: d._id,
        avgFill: Math.round(d.avgFill * 100) / 100,
        binCount: d.binCount,
        criticalBins: d.criticalBins,
        totalWeight: Math.round(d.totalWeight * 100) / 100,
        urgencyScore: Math.round(d.avgFill * d.criticalBins * 100) / 100,
      })),
      worstBins: worstBins.map((d, index) => ({
        rank: index + 1,
        binId: d.bin_id,
        name: d.name,
        fillPercent: d.bin_fill_percent,
        ward: d.ward,
        urgencyLevel:
          d.bin_fill_percent >= 95
            ? "CRITICAL"
            : d.bin_fill_percent >= 90
            ? "HIGH"
            : "MEDIUM",
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  regionLeaderboard: exports.regionLeaderboard,
  entityLeaderboard: exports.entityLeaderboard,
  worstPerforming: exports.worstPerforming,
};
