const Bin = require("../models/Bin.js");

const genRandomBinId = () => {
  const random = Math.floor(Math.random() * 201);
  return `bin${random}`;
};

const getRandomBin = async (binID) => {
  const binId = binID || genRandomBinId();
  const bin = await Bin.findOne({ bin_id: binId });
  if (!bin) {
    throw new Error(`Bin with ID ${binId} not found`);
  }
  return bin;
};

const addWasteToBin = async () => {
  try {
    const bin = await getRandomBin();
    const wasteTypes = [
      "Plastic",
      "Metal",
      "Glass",
      "Organic",
      "Paper",
      "E-waste",
      "Mixed",
    ];
    const randomWasteType =
      wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
    const randomWeight = Math.floor(Math.random() * 50) + 1; // Random weight between 1 and 50
    bin.waste_breakdown.push({
      waste_type: randomWasteType,
      weight: randomWeight,
    });
    await bin.save();
    console.log(
      `Added ${randomWeight}kg of ${randomWasteType} to bin ${bin.bin_id}`
    );
  } catch (error) {
    console.error("Error adding waste to bin:", error.message);
  }
};

const updateBinFillPercent = async () => {
  try {
    const bin = await getRandomBin();
    const totalWeight = bin.waste_breakdown.reduce(
      (sum, waste) => sum + waste.weight,
      0
    );
    const maxCapacity = 200; // Assuming max capacity is 200kg
    bin.bin_fill_percent = Math.floor(
      Math.min((totalWeight / maxCapacity) * 100, 100)
    );
    await bin.save();
    console.log(
      `Updated fill percent for bin ${bin.bin_id} to ${bin.bin_fill_percent}%`
    );
  } catch (error) {
    console.error("Error updating bin fill percent:", error.message);
  }
};

const emptyBin = async () => {
  try {
    const bin = await getRandomBin();
    bin.waste_breakdown = [];
    bin.bin_fill_percent = 0;
    await bin.save();
    console.log(`Emptied bin ${bin.bin_id}`);
  } catch (error) {
    console.error("Error emptying bin:", error.message);
  }
};

module.exports = {
  addWasteToBin,
  updateBinFillPercent,
  emptyBin,
  getRandomBin,
  genRandomBinId,
};
