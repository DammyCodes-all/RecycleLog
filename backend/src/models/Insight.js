const mongoose = require('mongoose');
const InsightSchema = new mongoose.Schema({
  summary: { type: String, required: true },
  generatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Insight', InsightSchema);
