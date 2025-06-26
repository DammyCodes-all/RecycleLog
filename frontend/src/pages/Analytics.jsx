import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import React from "react";
import { useState, useEffect } from "react";
import  ZonePieChart from "../components/PieChart";

import { BarChart, Bar, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';

const barData = [
  { name: 'Jan', value: 50 },
  { name: 'Feb', value: 60 },
  { name: 'Mar', value: 65 },
  { name: 'Apr', value: 48 },
  { name: 'May', value: 72 },
  { name: 'Jun', value: 78 },
  { name: 'Jul', value: 80 },
  { name: 'Aug', value: 5 },
  { name: 'Sep', value: 4 },
  { name: 'Oct', value: 3 },
  { name: 'Nov', value: 2 },
  { name: 'Dec', value: 2 },
];



const insights = [
  "Based on last month’s waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30%.",
  "High percentage of non-recyclables mixed with glass in Ward 7. Recommend signage or community education on proper sorting.",
  "Waste collection trends based on last month’s waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30% on proper sorting.",
  "Based on last month’s waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30%.",
  "High percentage of non-recyclables mixed with glass in Ward 7. Recommend signage or community education on proper sorting.",
  "Waste collection trends based on last month’s waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30% on proper sorting.",
  "Based on last month’s waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30%.",
  "High percentage of non-recyclables"
];

const Analytics = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
    <Topbar title="AI Analytics" />

     <div className="flex flex-col lg:flex-row gap-6 px-6 py-6">
  {/* Charts Column */}
  <div className="flex flex-col gap-6 w-full lg:w-2/3">
    {/* Bar Chart */}
    <div className="bg-white rounded-lg p-4 shadow h-[350px]">
      <h2 className="text-lg font-semibold text-green-900 mb-4">Waste collection trends</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={barData}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}kg`} />
          <Tooltip formatter={(val) => `${val}kg`} />
          <Bar dataKey="value" fill="#1c758a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Pie Chart */}
    <div className="bg-[#e5f0e2] rounded-lg p-4 shadow h-[450px]">
      <h2 className="text-lg font-semibold text-green-900 mb-4">Distribution of Wastes</h2>
      <ZonePieChart />
    </div>
  </div>

  {/* Insights Column */}
  <div className="bg-[#e3f4c6] rounded-lg p-4 shadow w-full lg:w-1/3 h-fit max-h-[720px] overflow-y-auto">
    <h2 className="text-lg font-semibold text-green-900 mb-4">Insights</h2>
    <ul className="list-disc list-inside space-y-2 text-sm text-green-900">
      {insights.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>


      </main>
    </div>
  );
};

export default Analytics;
