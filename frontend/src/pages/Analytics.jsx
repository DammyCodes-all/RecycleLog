import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useEffect, useState } from "react";
import ZonePieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import { useBinContext } from "../appContext";

const Analytics = () => {
  const [chartData, setChartData] = useState({ pieData: [], barData: [] });
  const { insights } = useBinContext();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5000/api/analytics/distribution"
      );
      const data = await response.json();
      console.log(data);
      setChartData((prevData) => ({
        ...prevData,
        pieData: data.pieData.map((item) => ({
          name: item.wasteType,
          value: item.count,
        })),
        barData: data.barData.map((item) => ({
          name: item.ward,
          value: item.totalWaste,
        })),
      }));
    };
    fetchData();
  }, []);

  const newInsights = insights.insights;

  return (
    <div className="flex h-screen bg-gray-50 relative md:static">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-16 md:ml-0">
        <Topbar title="AI Analytics" />

        <div className="flex flex-col lg:flex-row gap-6 px-6 py-6">
          {/* Charts Column */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3">
            {/* Bar Chart */}
            <div className="h-[350px]">
              <BarChart
                data={chartData.barData}
                title="Total waste per ward"
                height="80%"
              />
            </div>

            {/* Pie Chart */}
            <div className="bg-[#e5f0e2] rounded-lg p-4 shadow h-[450px]">
              <h2 className="text-lg font-semibold text-green-900 mb-4">
                Distribution of Wastes
              </h2>
              <ZonePieChart pieData={chartData.pieData} />
            </div>
          </div>

          {/* Insights Column */}
          <div className="bg-[#e3f4c6] rounded-lg p-4 shadow w-full lg:w-1/3 h-fit max-h-[720px] overflow-y-auto">
            <h2 className="text-lg font-semibold text-green-900 mb-4">
              Insights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-green-900">
              {newInsights.map((item, index) => (
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
