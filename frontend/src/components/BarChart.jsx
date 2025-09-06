import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow-lg border border-green-200">
        <p className="text-forest font-medium text-sm">{`${label}`}</p>
        <p className="text-primary font-semibold text-sm">
          {`Value: ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

const BarChart = ({
  data,
  title = "Chart",
  height = "100%",
  dataKey = "value",
  nameKey = "name",
  barColor = "#22c55e",
}) => {
  return (
    <div
      className="bg-gradient-to-br from-white to-green-50 rounded-lg p-5 shadow-lg border border-green-100 w-full"
      style={{ height }}
    >
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-forest font-outfit">
          {title}
        </h2>
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
      </div>

      <div style={{ width: "100%", height: "calc(100% - 30px)" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            margin={{ top: 10, right: 5, left: 0, bottom: 5 }}
            barCategoryGap="10%"
          >
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#e0f2e0"
              strokeOpacity={0.5}
            />
            <XAxis
              dataKey={nameKey}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#16a34a",
                fontSize: 10,
                fontWeight: 500,
                fontFamily: "outfit",
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#16a34a",
                fontSize: 10,
                fontWeight: 500,
              }}
              stroke="#16a34a"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey={dataKey}
              fill={barColor}
              radius={[3, 3, 0, 0]}
              className="drop-shadow-sm"
            ></Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
