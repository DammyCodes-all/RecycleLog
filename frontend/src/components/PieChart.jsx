import { PieChart, Pie, Cell } from "recharts";

const COLORS = [
  "#10b981",
  "#a3e635",
  "#1f2937",
  "#065f46",
  "#f87171",
  "#6b7280",
  "#6b7980",
];

const chartConfig = {
  Paper: {
    label: "Paper",
    color: COLORS[0],
  },
  Plastic: {
    label: "Plastic",
    color: COLORS[1],
  },
  Glass: {
    label: "Glass",
    color: COLORS[2],
  },
  "E-waste": {
    label: "E-waste",
    color: COLORS[3],
  },
  Organic: {
    label: "Organic",
    color: COLORS[4],
  },
  Mixed: {
    label: "Mixed",
    color: COLORS[5],
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
