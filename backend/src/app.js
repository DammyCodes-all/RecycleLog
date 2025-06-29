const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cron = require("node-cron");
const connectDB = require("./utils/db");
const api = require("../src/routes");
const { saveAIInsights } = require("./utils/ai");
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

console.log(
  "⏰ AI insights scheduler initialized - will run daily at midnight"
);

app.use("/api", api);
// Root
app.get("/", (req, res) => {
  res.send("RecycLog AI Backend Running");
});

module.exports = app;
