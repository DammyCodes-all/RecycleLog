const Bin = require("../models/Bin");

exports.timeSeries = async (req, res) => {
  try {
    const { start, end, type, region } = req.query;
    const match = {};
    if (type) match["waste_breakdown.waste_type"] = type;
    if (region) match.ward = region; // Using ward instead of location.zone
    if (start || end) match.createdAt = {}; // Using createdAt instead of timestamp
    if (start) match.createdAt.$gte = new Date(start);
    if (end) match.createdAt.$lte = new Date(end);

    const series = await Bin.aggregate([
      { $match: match },
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          totalWeight: { $sum: "$waste_breakdown.weight" },
          avgFill: { $avg: "$bin_fill_percent" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(
      series.map((d) => ({
        date: d._id,
        totalWeight: d.totalWeight,
        avgFill: d.avgFill,
      }))
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /analytics/distribution - Returns both pie and bar chart data
exports.distribution = async (req, res) => {
  try {
    // Pie data - waste type distribution
    const wasteTypeDistribution = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          count: { $sum: 1 },
          totalWeight: { $sum: "$waste_breakdown.weight" },
        },
      },
      { $sort: { count: -1 } },
    ]);

    const pieData = wasteTypeDistribution.map((item) => ({
      wasteType: item._id,
      count: item.count,
      totalWeight: item.totalWeight,
    }));

    // Bar data - waste count per ward (frequency, not weight)
    const wardDistribution = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$ward",
          totalWaste: { $sum: 1 }, // Count frequency instead of sum weight
          binCount: { $addToSet: "$bin_id" },
        },
      },
      {
        $project: {
          _id: 1,
          totalWaste: 1,
          binCount: { $size: "$binCount" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const barData = wardDistribution.map((item) => ({
      ward: item._id,
      totalWaste: item.totalWaste, // This is now frequency count
      binCount: item.binCount,
    }));

    res.json({
      pieData,
      barData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /analytics/locations - Fixed to use ward field
exports.locations = async (req, res) => {
  try {
    const locations = await Bin.distinct("ward");
    // Sort locations alphabetically
    locations.sort();
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /analytics/weight-distribution - New endpoint for weight analysis
exports.weightDistribution = async (req, res) => {
  try {
    const weightDist = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          totalWeight: { $sum: "$waste_breakdown.weight" },
          avgWeight: { $avg: "$waste_breakdown.weight" },
          count: { $sum: 1 },
        },
      },
      { $sort: { totalWeight: -1 } },
    ]);

    res.json(weightDist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  timeSeries: exports.timeSeries,
  distribution: exports.distribution,
  locations: exports.locations,
  weightDistribution: exports.weightDistribution,
};
