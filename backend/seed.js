const mongoose = require("mongoose");
const Bin = require("./src/models/Bin");
const binsData = require("./binData");
const connectDB = require("./src/utils/db");
require("dotenv").config();
// Seed function
const seedBins = async () => {
  try {
    console.log("🗑️ Starting bin seeding process...");

    // Delete all existing bins
    const deleteResult = await Bin.deleteMany({});
    console.log(`🗑️ Deleted ${deleteResult.deletedCount} existing bins`);

    // Loop through binData and insert each bin
    let insertedCount = 0;
    for (const binData of binsData) {
      try {
        const newBin = new Bin(binData);
        await newBin.save();
        insertedCount++;
        console.log(`✅ Inserted bin: ${binData.name} (${binData.bin_id})`);
      } catch (error) {
        console.error(
          `❌ Failed to insert bin ${binData.bin_id}:`,
          error.message
        );
      }
    }

    console.log(
      `🎉 Seeding completed! Successfully inserted ${insertedCount} out of ${binsData.length} bins`
    );
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log("📪 Database connection closed");
  }
};

// Run the seeder
const runSeeder = async () => {
  await connectDB();
  await seedBins();
};

// Execute the seeder
runSeeder();
