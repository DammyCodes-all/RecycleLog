const OpenAI = require("openai");
const Bin = require("../models/Bin");
const Recommendation = require("../models/Recommendation");
require("dotenv").config();

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.AI_API_KEY,
});

// Generate aggregated data for AI insights
async function generateAggregatedData() {
  try {
    const [
      overallStats,
      wardStats,
      criticalBins,
      wasteTypeStats,
      fillDistribution,
    ] = await Promise.all([
      // Overall statistics
      Bin.aggregate([
        {
          $group: {
            _id: null,
            totalBins: { $sum: 1 },
            averageFill: { $avg: "$bin_fill_percent" },
            maxFill: { $max: "$bin_fill_percent" },
            minFill: { $min: "$bin_fill_percent" },
            totalWeight: { $sum: { $sum: "$waste_breakdown.weight" } },
          },
        },
      ]),

      // Ward-based statistics
      Bin.aggregate([
        {
          $group: {
            _id: "$ward",
            binCount: { $sum: 1 },
            averageFill: { $avg: "$bin_fill_percent" },
            criticalBins: {
              $sum: {
                $cond: [{ $gte: ["$bin_fill_percent", 80] }, 1, 0],
              },
            },
            warningBins: {
              $sum: {
                $cond: [
                  {
                    $and: [
                      { $gte: ["$bin_fill_percent", 60] },
                      { $lt: ["$bin_fill_percent", 80] },
                    ],
                  },
                  1,
                  0,
                ],
              },
            },
            totalWeight: { $sum: { $sum: "$waste_breakdown.weight" } },
          },
        },
        { $sort: { averageFill: -1 } },
      ]),

      // Critical bins needing immediate attention
      Bin.aggregate([
        { $match: { bin_fill_percent: { $gte: 80 } } },
        {
          $project: {
            bin_id: 1,
            name: 1,
            ward: 1,
            bin_fill_percent: 1,
            location: 1,
            updatedAt: 1,
          },
        },
        { $sort: { bin_fill_percent: -1 } },
        { $limit: 10 },
      ]),

      // Waste type distribution
      Bin.aggregate([
        { $unwind: "$waste_breakdown" },
        {
          $group: {
            _id: "$waste_breakdown.waste_type",
            count: { $sum: 1 },
            totalWeight: { $sum: "$waste_breakdown.weight" },
            averageWeight: { $avg: "$waste_breakdown.weight" },
          },
        },
        { $sort: { count: -1 } },
      ]),

      // Fill level distribution
      Bin.aggregate([
        {
          $bucket: {
            groupBy: "$bin_fill_percent",
            boundaries: [0, 25, 50, 75, 80, 100],
            default: "other",
            output: {
              count: { $sum: 1 },
              bins: { $push: "$bin_id" },
            },
          },
        },
      ]),
    ]);

    // Format the aggregated data
    const aggregatedData = {
      summary: {
        total: overallStats[0]?.totalBins || 0,
        averageFill: Math.round(overallStats[0]?.averageFill || 0),
        maxFill: overallStats[0]?.maxFill || 0,
        minFill: overallStats[0]?.minFill || 0,
        totalWeight: Math.round(overallStats[0]?.totalWeight || 0),
      },
      wards: wardStats.map((ward) => ({
        name: ward._id,
        bins: ward.binCount,
        avgFill: Math.round(ward.averageFill),
        critical: ward.criticalBins,
        warning: ward.warningBins,
        weight: Math.round(ward.totalWeight),
      })),
      criticalBins: criticalBins.map((bin) => ({
        id: bin.bin_id,
        name: bin.name,
        ward: bin.ward,
        fill: bin.bin_fill_percent,
        location: bin.location,
        lastUpdated: bin.updatedAt,
      })),
      wasteTypes: wasteTypeStats.map((waste) => ({
        type: waste._id,
        count: waste.count,
        weight: Math.round(waste.totalWeight),
        avgWeight: Math.round(waste.averageWeight),
      })),
      fillDistribution: fillDistribution.map((bucket) => ({
        range: bucket._id === "other" ? "100+" : `${bucket._id}%`,
        count: bucket.count,
        bins: bucket.bins,
      })),
    };

    return aggregatedData;
  } catch (error) {
    console.error("Data aggregation error:", error);
    throw error;
  }
}

// Generate AI insights using aggregated data
async function generateWasteInsights() {
  try {
    const aggregatedData = await generateAggregatedData();

    const prompt = `
Analyze this waste management data and return ONLY valid JSON:

SUMMARY: ${JSON.stringify(aggregatedData, null, 2)}

Return EXACTLY this JSON structure with no additional text:

{
  "insights": [
    "Key insight about overall performance",
    "Pattern discovered in ward performance", 
    "Fill rate trend observation",
    "Resource optimization opportunity",
    "Collection efficiency finding",
    "Geographic hotspot identification",
    "Waste type distribution insight",
    "Operational efficiency observation",
    "Risk management finding",
    "Strategic improvement opportunity"
  ],
  "alerts": [
     This is a brief message of an alert and brief solutions
     This is a brief message of an alert and brief solutions
     This is a brief message of an alert and brief solutions
  ]
}

IMPORTANT: Return ONLY the JSON object, no additional text or explanations.
`;

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        {
          role: "system",
          content:
            "You are a waste management analyst. Return ONLY valid JSON with no additional text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.1, // Lower temperature for more consistent output
      max_tokens: 1500,
    });

    const responseText = completion.choices[0].message.content.trim();
    console.log("Raw AI Response:", responseText);

    // Parse the JSON response
    let parsedResponse;
    try {
      // Try to extract JSON from response (in case there's extra text)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      const jsonText = jsonMatch ? jsonMatch[0] : responseText;

      parsedResponse = JSON.parse(jsonText);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Response was:", responseText);

      // Fallback if parsing fails
      throw new Error("Invalid JSON response from AI");
    }

    return {
      success: true,
      timestamp: new Date().toISOString(),
      dataAnalyzed: aggregatedData.summary.total,
      insights: parsedResponse.insights || [],
      alerts: parsedResponse.alerts || [],
      rawData: aggregatedData,
    };
  } catch (error) {
    console.error("AI Insights Error:", error);

    // Fallback response with basic aggregated data
    const basicData = await generateAggregatedData().catch(() => null);

    return {
      success: false,
      error: error.message,
      insights: basicData
        ? [
            `Total of ${basicData.summary.total} bins monitored`,
            `Average fill level is ${basicData.summary.averageFill}%`,
            `${basicData.criticalBins.length} bins at critical capacity`,
            `${basicData.wards.length} wards in monitoring system`,
            "AI analysis temporarily unavailable",
            "Manual review recommended for critical bins",
            "Ward performance varies significantly",
            "Collection optimization needed",
            "Real-time monitoring active",
            "System requires attention",
          ]
        : [],
      alerts: basicData
        ? [
            {
              type: "critical",
              message: `${basicData.criticalBins.length} bins require immediate collection`,
              ward: "Multiple",
              action: "Schedule urgent collection",
            },
            {
              type: "warning",
              message: "AI system unavailable",
              ward: "System",
              action: "Manual analysis required",
            },
            {
              type: "info",
              message: "Monitoring system operational",
              ward: "All",
              action: "Continue monitoring",
            },
          ]
        : [],
    };
  }
}

// Save AI insights as stringified JSON
async function saveAIInsights() {
  try {
    const aiResult = await generateWasteInsights();

    const recommendation = new Recommendation({
      text: JSON.stringify(aiResult), // Store entire response as string
      relatedZone: "All Wards", // Optional
    });

    await recommendation.save();
    console.log("✅ AI insights saved to database");

    return recommendation;
  } catch (error) {
    console.error("❌ Failed to save AI insights:", error);
    throw error;
  }
}

module.exports = {
  generateWasteInsights,
  generateAggregatedData,
  openai,
  saveAIInsights,
};
