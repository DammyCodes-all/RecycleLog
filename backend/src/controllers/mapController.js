const Bin = require("../models/Bin");

// Get all bins formatted for map display
const getHeatMap = async (req, res) => {
  try {
    const bins = await Bin.find().select(
      "bin_id location bin_fill_percent waste_type updatedAt"
    );

    const mapBins = bins.map((bin) => {
      // Determine status based on fill percentage
      let status = "normal";
      if (bin.bin_fill_percent >= 80) {
        status = "critical";
      } else if (bin.bin_fill_percent >= 60) {
        status = "warning";
      }

      // Generate name from bin_id and location
      const name = `Bin ${bin.bin_id}`;

      // Format last collection date
      const lastCollection = bin.updatedAt
        ? bin.updatedAt.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];

      return {
        id: bin.bin_id,
        name: name,
        fill: bin.bin_fill_percent,
        position: bin.location, // [longitude, latitude]
        status: status,
        lastCollection: lastCollection,
        wasteType: bin.waste_type,
      };
    });

    res.status(200).json({
      success: true,
      count: mapBins.length,
      data: mapBins,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching bins for map",
      error: error.message,
    });
  }
};

module.exports = {
  getHeatMap,
};
