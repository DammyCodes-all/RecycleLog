const Recommendation = require('../models/Recommendation');
const Bin = require('../models/Bin');

// GET /recommendations
exports.getRecommendations = async (req, res) => {
  try {
    // Limit results and only get essential fields
    const recs = await Recommendation.find()
      .select('text createdAt') 
      .sort({ createdAt: -1 })
      .limit(2); 
    
    res.json(recs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /recommendations/generate
exports.generateRecommendation = async (req, res) => {
  try {
    // Fetch bins for heatmap & context
    const bins = await Bin.find();
    // Build suggestions (frontend AI will refine)
    const suggestions = bins.map(bin => {
      const urgency = bin.bin_fill_percent > 90 ? 'high' : (bin.bin_fill_percent > 80 ? 'medium' : 'low');
      return {
        text: `Bin ${bin.bin_id} in ${bin.location.zone} is ${bin.bin_fill_percent}% full.`,
        relatedZone: bin.location.zone,
        binId: bin.bin_id,
        fillPercent: bin.bin_fill_percent,
        wasteType: bin.waste_type,
        lastUpdated: bin.timestamp,
        urgency
      };
    });

    // Save into DB for history
    const created = await Recommendation.insertMany(suggestions.map(s => ({
      text: s.text,
      relatedZone: s.relatedZone,
      createdAt: new Date(),
      metadata: { binId: s.binId, fillPercent: s.fillPercent, wasteType: s.wasteType, lastUpdated: s.lastUpdated, urgency: s.urgency }
    })));

    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
};
