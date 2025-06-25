
const Bin = require('../models/Bin');

// GET /leaderboard/regions
exports.regionLeaderboard = async (req, res) => {
  try {
    // Aggregate by region to compute waste per cap or improvement
    const data = await Bin.aggregate([
      { $group: { _id: '$location.zone', avgFill: { $avg: '$bin_fill_percent' }, totalWeight: { $sum: '$estimated_weight' } } },
      { $sort: { avgFill: 1 } }, // least waste per cap approximated by avg fill ascending
      { $limit: 10 }
    ]);
    res.json(data.map(d => ({ region: d._id, avgFill: d.avgFill, totalWeight: d.totalWeight })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /leaderboard/entities
exports.entityLeaderboard = async (req, res) => {
  try {
    // Example: leaderboard by individual bins most improved (placeholder logic)
    const data = await Bin.aggregate([
      { $sort: { bin_fill_percent: 1 } },
      { $limit: 10 }
    ]);
    res.json(data.map(d => ({ binId: d.bin_id, fillPercent: d.bin_fill_percent, location: d.location.zone })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};