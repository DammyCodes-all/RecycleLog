const Bin = require("../models/Bin");

// Get all bins formatted for map display
const getHeatMap = async (req, res) => {
  try {
    const bins = await Bin.find().select(
      "bin_id location bin_fill_percent ward name updatedAt"
    );

    const mapBins = bins.map((bin) => {
      // Determine status based on fill percentage
      let status = "normal";
      if (bin.bin_fill_percent >= 80) {
        status = "critical";
      } else if (bin.bin_fill_percent >= 60) {
        status = "warning";
      }

      // Format last collection date
      const lastCollection = bin.updatedAt
        ? bin.updatedAt.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];

      return {
        bin_id: bin.bin_id,
        name: bin.name,
        bin_fill_percent: bin.bin_fill_percent,
        location: bin.location, // [longitude, latitude]
        status: status,
        ward: bin.ward,
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
