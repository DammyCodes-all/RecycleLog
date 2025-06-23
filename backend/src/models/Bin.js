const mongoose = require("mongoose");
const BinSchema = new mongoose.Schema(
  {
    bin_id: { type: String, required: true, unique: true },
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
    waste_type: {
      type: String,
      required: true,
      enum: [
        "plastic",
        "organic",
        "e-waste",
        "paper",
        "metal",
        "glass",
        "other",
      ],
    },
    estimated_weight: { type: Number, required: true },
    bin_fill_percent: { type: Number, required: true, min: 0, max: 100 },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Bin", BinSchema);
