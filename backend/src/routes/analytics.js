const express = require('express');
const router = express.Router();
const { timeSeries, distribution, locations } = require('../controllers/analyticsController');

// Analytics
router.get('/time-series', timeSeries);
router.get('/distribution', distribution);
router.get('/locations', locations);

module.exports = router;