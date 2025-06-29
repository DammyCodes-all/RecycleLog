const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  text: { 
    type: String, 
    required: true 
  }, // This will store the stringified JSON response
  relatedZone: { 
    type: String 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);