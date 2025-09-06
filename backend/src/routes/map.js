const express = require("express");
const router = express.Router();
const { getHeatMap } = require("../controllers/mapController");

// Map & heatmap
router.get("/heatmap", getHeatMap);
// Optional WebSocket endpoint handled elsewhere

module.exports = router;
