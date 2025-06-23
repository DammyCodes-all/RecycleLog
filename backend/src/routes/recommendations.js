const express = require('express');
const router = express.Router();
const { getRecommendations, generateRecommendation } = require('../controllers/recommendationController');

// AI recommendations
router.get('/', getRecommendations);
router.post('/generate', generateRecommendation);

module.exports = router;
