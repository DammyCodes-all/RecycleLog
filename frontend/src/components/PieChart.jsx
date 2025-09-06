import { PieChart, Pie, Cell } from "recharts";

const COLORS = [
  "#ef4444", // Red - for Plastic (high visibility)
  "#22c55e", // Green - for Organic (natural association)
  "#3b82f6", // Blue - for Paper (professional)
  "#f59e0b", // Amber - for Mixed (attention-grabbing)
  "#8b5cf6", // Purple - for Glass (premium feel)
  "#06b6d4", // Cyan - for E-waste (tech association)
  "#64748b", // Slate - for additional categories
];

const chartConfig = {
  Plastic: {
    label: "Plastic",
    color: "#ef4444", // Red
  },
  Organic: {
    label: "Organic",
    color: "#22c55e", // Green
  },
  Paper: {
    label: "Paper",
    color: "#3b82f6", // Blue
  },
  Mixed: {
    label: "Mixed",
    color: "#f59e0b", // Amber
  },
  Glass: {
    label: "Glass",
    color: "#8b5cf6", // Purple
  },
  "E-waste": {
    label: "E-waste",
    color: "#06b6d4", // Cyan
  },
  Metal: {
    Label: "Metal",
    color: "#64748b", // Slate
  },
};

function ChartLegendContent({ nameKey, pieData }) {
  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {pieData.map((entry, index) => (
        <li
          key={`legend-${index}`}
          className="flex items-center gap-1 text-sm text-gray-700"
        >
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          />
          {entry[nameKey]}
        </li>
      ))}
    </ul>
  );
}

export default function ZonePieChart({ pieData }) {
  return (
    <div className="flex flex-col p-2">
      {/* Content */}
      <div className="flex flex-col justify-evenly gap-3 items-center">
        {/* Pie Chart */}
        <div className="max-w-[300px] max-h-[300px]">
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    chartConfig[entry.name]?.color ||
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Legend Beside Chart */}
        <div className="flex w-full gap-2 items-center justify-center">
          <ChartLegendContent nameKey="name" pieData={pieData} />
        </div>
      </div>
    </div>
  );
}
