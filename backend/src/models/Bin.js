const mongoose = require('mongoose');
const BinSchema = new mongoose.Schema({
  bin_id: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  waste_type: { type: String, required: true, enum: ['plastic','organic','e-waste','paper','metal','glass','other'] },
  estimated_weight: { type: Number, required: true },
  bin_fill_percent: { type: Number, required: true, min: 0, max: 100 },
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Bin', BinSchema);