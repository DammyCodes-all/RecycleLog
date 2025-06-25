const express = require('express');
const router = express.Router();
const { getRecommendations, generateRecommendation } = require('../controllers/recommendationController');

// AI Recommendations
router.get('/', getRecommendations);
router.post('/generate', generateRecommendation);

module.exports = router;
