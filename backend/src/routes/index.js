const express = require('express');
const router = express.Router();

router.use('/dashboard', require('./dashboard'));
router.use('/bins', require('./bins'));
router.use('/map', require('./map'));
router.use('/analytics', require('./analytics'));
router.use('/recommendations', require('./recommendations'));
router.use('/public', require('./public'));
router.use('/leaderboard', require('./leaderboard'));

module.exports = router;
