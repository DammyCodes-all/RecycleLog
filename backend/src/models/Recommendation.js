const mongoose = require('mongoose');
const RecommendationSchema = new mongoose.Schema({
  text: { type: String, required: true },
  relatedZone: { type: String },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Recommendation', RecommendationSchema);