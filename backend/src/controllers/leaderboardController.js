const Bin = require('../models/Bin');

// GET /leaderboard/regions
exports.regionLeaderboard = async (req, res) => {
  try {
    // Aggregate by ward to compute average fill percent and total waste weight
    const data = await Bin.aggregate([
      { $unwind: '$waste_breakdown' },
      {
        $group: {
          _id: '$ward',
          avgFill: { $avg: '$bin_fill_percent' },
          totalWeight: { $sum: '$waste_breakdown.weight' }
        }
      },
      { $sort: { avgFill: 1 } }, // least average fill first
      { $limit: 10 }
    ]);

    // Map to include rank
    const result = data.map((d, index) => ({
      rank: index + 1,
      region: d._id,
      avgFill: d.avgFill,
      totalWeight: d.totalWeight
    }));

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /leaderboard/entities
exports.entityLeaderboard = async (req, res) => {
  try {
    // List individual bins sorted by lowest fill percent
    const data = await Bin.find({}, 'bin_id bin_fill_percent ward')
      .sort({ bin_fill_percent: 1 })
      .limit(10)
      .lean();

    const result = data.map((d, index) => ({
      rank: index + 1,
      binId: d.bin_id,
      fillPercent: d.bin_fill_percent,
      ward: d.ward
    }));

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
