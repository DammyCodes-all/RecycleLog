const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const BinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bin_id: { type: String, required: true, unique: true },
    ward: {
      type: String,
      required: true,
      enum: ["Ward A", "Ward B", "Ward C", "Ward D", "Ward E"],
    },
    location: {
      type: [Number, Number], // [longitude, latitude]
      required: true,
      validate: {
        validator: function (v) {
          return v.length === 2;
        },
        message:
          "Location must contain exactly 2 coordinates [longitude, latitude]",
      },
    },
    bin_fill_percent: { type: Number, required: true, min: 0, max: 100 },
    waste_breakdown: [
      {
        waste_type: { type: String, required: true },
        weight: { type: Number, required: true, min: 0 },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Bin", BinSchema);
