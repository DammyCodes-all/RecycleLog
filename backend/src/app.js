const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cron = require("node-cron");
const connectDB = require("./utils/db");
const api = require("../src/routes");
const { saveAIInsights } = require("./utils/ai");
const {
  addWasteToBin,
  updateBinFillPercent,
  emptyBin,
} = require("./utils/iot");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Connect to DB
connectDB();

// Schedule AI insights generation to run at midnight (00:00) every day
cron.schedule(
  "0 0 * * *",
  async () => {
    console.log("🕛 Midnight: Starting scheduled AI insights generation...");
    try {
      await saveAIInsights();
      console.log("✅ Scheduled AI insights completed successfully");
    } catch (error) {
      console.error("❌ Scheduled AI insights failed:", error.message);
    }
  },
  {
    timezone: "Africa/Lagos", // Nigerian timezone
  }
);

// Schedule adding waste to bins every 30 seconds
cron.schedule("*/30 * * * * *", async () => {
  try {
    await addWasteToBin();
    await addWasteToBin();
    await addWasteToBin();
  } catch (error) {
    console.error("❌ Error adding waste:", error.message);
  }
});

// Schedule updating bin fill percent every 30 seconds
cron.schedule("*/30  * * * * *", async () => {
  try {
    await updateBinFillPercent();
    await updateBinFillPercent();
    await updateBinFillPercent();
  } catch (error) {
    console.error("❌ Error updating fill percent:", error.message);
  }
});

// Schedule emptying bins every 5 minutes
cron.schedule("*/5 * * * *", async () => {
  try {
    await emptyBin();
    await emptyBin();
    await emptyBin();
    await emptyBin();
    await emptyBin();
  } catch (error) {
    console.error("❌ Error emptying bin:", error.message);
  }
});

console.log(
  "⏰ AI insights scheduler initialized - will run daily at midnight"
);
console.log("🔄 IoT simulation schedulers initialized:");
console.log("   - Adding waste every 30 seconds");
console.log("   - Updating fill percent every 30 seconds");
console.log("   - Emptying bins every 5 minutes");

app.use("/api", api);
// Root
app.get("/", (req, res) => {
  res.send("RecycLog AI Backend Running");
});

module.exports = app;
