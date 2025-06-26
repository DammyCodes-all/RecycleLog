

import { PieChart, Pie, Cell } from "recharts"

// Data
const pieData = [
  { name: "Zone A", value: 400 },
  { name: "Zone C", value: 300 },
  { name: "Zone Cv", value: 200 },
  { name: "Zone Cb", value: 100 },
  { name: "Zone C (other)", value: 150 },
]

const COLORS = ["#003f5c", "#ffa600", "#bc5090", "#ff6361", "#58508d"]

const chartConfig = {
  "Zone A": {
    label: "Zone A",
    color: COLORS[0],
  },
  "Zone C": {
    label: "Zone C",
    color: COLORS[1],
  },
  "Zone Cv": {
    label: "Zone Cv",
    color: COLORS[2],
  },
  "Zone Cb": {
    label: "Zone Cb",
    color: COLORS[3],
  },
  "Zone C (other)": {
    label: "Zone C (other)",
    color: COLORS[4],
  },
}

function ChartLegendContent({ nameKey }) {
  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {pieData.map((entry, index) => (
        <li
          key={`legend-${index}`}
          className="flex items-center gap-2 text-sm text-gray-700"
        >
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          />
          {entry[nameKey]}
        </li>
      ))}
    </ul>
  )
}

export default function ZonePieChart() {
  return (
  <div className="flex flex-col p-2">
  {/* Content */}
  <div className="flex flex-row justify-center gap-6">
    {/* Pie Chart */}
    <div className="w-[300px] h-[300px]">
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
              fill={chartConfig[entry.name]?.color || COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>

    {/* Legend Beside Chart */}
    <div className="flex flex-col w-[200px] justify-center">
      <ChartLegendContent nameKey="name" />
    </div>
  </div>
</div>

  )
}
