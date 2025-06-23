const Bin = require('../models/Bin');

exports.timeSeries = async (req, res) => {
  try {
    const { start, end, type, region } = req.query;
    const match = {};
    if (type) match.waste_type = type;
    if (region) match['location.zone'] = region;
    if (start || end) match.timestamp = {};
    if (start) match.timestamp.$gte = new Date(start);
    if (end) match.timestamp.$lte = new Date(end);

    const series = await Bin.aggregate([
      { $match: match },
      { $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
          totalWeight: { $sum: '$estimated_weight' },
          avgFill: { $avg: '$bin_fill_percent' }
      }},
      { $sort: { _id: 1 } }
    ]);

    res.json(series.map(d => ({ date: d._id, totalWeight: d.totalWeight, avgFill: d.avgFill })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /analytics/distribution
exports.distribution = async (req, res) => {
  try {
    const dist = await Bin.aggregate([
      { $group: { _id: '$waste_type', count: { $sum: 1 } } }
    ]);
    res.json(dist.map(d => ({ type: d._id, count: d.count })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /analytics/locations
exports.locations = async (req, res) => {
  try {
    const locations = await Bin.distinct('location.zone');
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
