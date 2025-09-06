const Bin = require("../models/Bin");

// List all bins
const listBins = async (req, res) => {
  try {
    const bins = await Bin.find().sort({ createdAt: -1 });
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
    const { bin_id, location, ward, bin_fill_percent, name, waste_breakdown } =
      req.body;
    const parsed_location = JSON.parse(location);
    console.log(parsed_location);

    // Validate required fields
    if (!bin_id || !location || !ward || bin_fill_percent === undefined) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required: bin_id, location, ward, bin_fill_percent",
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

    // Validate waste_breakdown if provided
    if (waste_breakdown && !Array.isArray(waste_breakdown)) {
      return res.status(400).json({
        success: false,
        message: "waste_breakdown must be an array",
      });
    }

    if (waste_breakdown) {
      for (const item of waste_breakdown) {
        if (!item.waste_type || item.weight === undefined || item.weight < 0) {
          return res.status(400).json({
            success: false,
            message:
              "Each waste_breakdown item must have waste_type and weight (>= 0)",
          });
        }
      }
    }

    let Name = name ? name : `Bin ${bin_id}`;

    const newBin = new Bin({
      name: Name,
      bin_id,
      ward,
      location: parsed_location,
      bin_fill_percent,
      waste_breakdown: waste_breakdown || [],
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
      { bin_fill_percent },
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

// Update waste breakdown
const updateWasteBreakdown = async (req, res) => {
  try {
    const { id } = req.params;
    const { waste_breakdown } = req.body;

    if (!waste_breakdown || !Array.isArray(waste_breakdown)) {
      return res.status(400).json({
        success: false,
        message: "waste_breakdown must be an array",
      });
    }

    const updatedBin = await Bin.findOneAndUpdate(
      { bin_id: id },
      { waste_breakdown },
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
      message: "Waste breakdown updated successfully",
      data: updatedBin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating waste breakdown",
      error: error.message,
    });
  }
};

module.exports = {
  listBins,
  createBin,
  updateBinFill,
  updateWasteBreakdown,
};
