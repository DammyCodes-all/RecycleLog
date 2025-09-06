const Bin = require("../models/Bin");

exports.timeSeries = async (req, res) => {
  try {
    const { start, end, type, region } = req.query;
    const match = {};

    // Fix: Match on ward first, then filter waste types in next stage
    if (region) match.ward = region;
    if (start || end) match.createdAt = {};
    if (start) match.createdAt.$gte = new Date(start);
    if (end) match.createdAt.$lte = new Date(end);

    const pipeline = [{ $match: match }, { $unwind: "$waste_breakdown" }];

    // Add waste type filter after unwinding
    if (type) {
      pipeline.push({ $match: { "waste_breakdown.waste_type": type } });
    }

    pipeline.push(
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          totalWeight: { $sum: "$waste_breakdown.weight" },
          avgFill: { $avg: "$bin_fill_percent" },
          wasteCount: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } }
    );

    const series = await Bin.aggregate(pipeline);

    res.json(
      series.map((d) => ({
        date: d._id,
        totalWeight: Math.round(d.totalWeight * 100) / 100,
        avgFill: Math.round(d.avgFill * 100) / 100,
        wasteCount: d.wasteCount,
      }))
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /analytics/distribution - Fixed aggregations
exports.distribution = async (req, res) => {
  try {
    // Pie data - waste type distribution by weight
    const wasteTypeDistribution = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          count: { $sum: 1 },
          totalWeight: { $sum: "$waste_breakdown.weight" },
          avgWeight: { $avg: "$waste_breakdown.weight" },
        },
      },
      { $sort: { totalWeight: -1 } },
    ]);

    const pieData = wasteTypeDistribution.map((item) => ({
      wasteType: item._id,
      count: item.count,
      totalWeight: Math.round(item.totalWeight * 100) / 100,
      avgWeight: Math.round(item.avgWeight * 100) / 100,
    }));

    // Bar data - waste analysis per ward
    const wardDistribution = await Bin.aggregate([
      {
        $group: {
          _id: "$ward",
          binCount: { $sum: 1 },
          avgFillPercent: { $avg: "$bin_fill_percent" },
          totalWasteEntries: { $sum: { $size: "$waste_breakdown" } },
          totalWeight: {
            $sum: {
              $sum: "$waste_breakdown.weight",
            },
          },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const barData = wardDistribution.map((item) => ({
      ward: item._id,
      binCount: item.binCount,
      avgFillPercent: Math.round(item.avgFillPercent * 100) / 100,
      totalWasteEntries: item.totalWasteEntries,
      totalWeight: Math.round(item.totalWeight * 100) / 100,
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

// GET /analytics/locations - Returns ward locations
exports.locations = async (req, res) => {
  try {
    const locations = await Bin.distinct("ward");
    locations.sort();
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /analytics/weight-distribution - Enhanced weight analysis
exports.weightDistribution = async (req, res) => {
  try {
    const weightDist = await Bin.aggregate([
      { $unwind: "$waste_breakdown" },
      {
        $group: {
          _id: "$waste_breakdown.waste_type",
          totalWeight: { $sum: "$waste_breakdown.weight" },
          avgWeight: { $avg: "$waste_breakdown.weight" },
          minWeight: { $min: "$waste_breakdown.weight" },
          maxWeight: { $max: "$waste_breakdown.weight" },
          count: { $sum: 1 },
        },
      },
      { $sort: { totalWeight: -1 } },
    ]);

    const formattedData = weightDist.map((item) => ({
      wasteType: item._id,
      totalWeight: Math.round(item.totalWeight * 100) / 100,
      avgWeight: Math.round(item.avgWeight * 100) / 100,
      minWeight: item.minWeight,
      maxWeight: item.maxWeight,
      count: item.count,
    }));

    res.json(formattedData);
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
