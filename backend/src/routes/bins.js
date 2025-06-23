const express = require('express');
const router = express.Router();
const { listBins, createBin, updateBinFill } = require('../controllers/binController');

// Bin management
router.get('/', listBins);
router.post('/', createBin);
router.patch('/:id/fill', updateBinFill);

module.exports = router;