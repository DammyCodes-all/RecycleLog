const express = require('express');
const router = express.Router();
const { getStats, getInsights } = require('../controllers/dashboardController');

// Dashboard routes
router.get('/stats', getStats);
router.get('/insights', getInsights);

module.exports = router;