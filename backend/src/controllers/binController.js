const Bin = require("../models/Bin");

// List all bins
const listBins = async (req, res) => {
  try {
    const bins = await Bin.find().sort({ timestamp: -1 });
    res.status(200).json({
      success: true,
      count: bins.length,
      data: bins,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching bins",
      error: error.message,
    });
  }
};

// Create a new bin
const createBin = async (req, res) => {
  try {
    const { bin_id, location, ward, bin_fill_percent, name } = req.body;
    const parsed_location = JSON.parse(location);
    console.log(parsed_location);
    // Validate required fields
    if (!bin_id || !location || !ward || bin_fill_percent === undefined) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required: bin_id, location,ward , bin_fill_percent",
      });
    }

    // Validate location format
    if (!Array.isArray(parsed_location) || parsed_location.length !== 2) {
      return res.status(400).json({
        success: false,
        message:
          "Location must be an array with exactly 2 coordinates [longitude, latitude]",
      });
    }
    let Name = name ? name : `Bin ${bin_id}`;

    const newBin = new Bin({
      name: Name,
      bin_id,
      ward,
      location: parsed_location,
      bin_fill_percent,
    });

    const savedBin = await newBin.save();
    res.status(201).json({
      success: true,
      message: "Bin created successfully",
      data: savedBin,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Bin ID already exists",
      });
    }
    res.status(500).json({
      success: false,
      message: "Error creating bin",
      error: error.message,
    });
  }
};

// Update bin fill percentage
const updateBinFill = async (req, res) => {
  try {
    const { id } = req.params;
    const { bin_fill_percent } = req.body;

    if (bin_fill_percent === undefined) {
      return res.status(400).json({
        success: false,
        message: "bin_fill_percent is required",
      });
    }

    if (bin_fill_percent < 0 || bin_fill_percent > 100) {
      return res.status(400).json({
        success: false,
        message: "bin_fill_percent must be between 0 and 100",
      });
    }

    const updatedBin = await Bin.findOneAndUpdate(
      { bin_id: id },
      { bin_fill_percent, timestamp: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedBin) {
      return res.status(404).json({
        success: false,
        message: "Bin not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Bin fill percentage updated successfully",
      data: updatedBin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating bin",
      error: error.message,
    });
  }
};

module.exports = {
  listBins,
  createBin,
  updateBinFill,
};
