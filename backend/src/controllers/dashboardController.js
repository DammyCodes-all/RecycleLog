const Bin = require('../models/Bin');
const Insight = require('../models/Insight');

// GET /dashboard/stats
exports.getStats = async (req, res) => {
  try {
    const totalBins = await Bin.countDocuments();
    const avgFill = await Bin.aggregate([
      { $group: { _id: null, avgFill: { $avg: '$bin_fill_percent' } } }
    ]);
    const topType = await Bin.aggregate([
      { $group: { _id: '$waste_type', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);

    res.json({
      totalBins,
      avgFill: avgFill[0]?.avgFill || 0,
      topWasteType: topType[0]?._id || null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /dashboard/insights
exports.getInsights = async (req, res) => {
  try {
    const insights = await Insight.find().sort({ generatedAt: -1 }).limit(5);
    res.json(insights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
