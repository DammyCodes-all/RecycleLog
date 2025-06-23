const mongoose = require('mongoose');
const TipSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Tip', TipSchema);
