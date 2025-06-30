import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BarChart from "../components/BarChart";
import AnalyticsBar from "../components/AnalyticsBar";
import { useEffect, useState, useCallback } from "react";
import { useBinContext } from "../appContext";

const DashBoard = () => {
  const { insights } = useBinContext();
  const [dashBoardData, setDashBoardData] = useState({
    totalBins: "Loading...",
    topWasteType: "Loading...",
    averageFill: "Loading...",
    wardData: [],
  });
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/dashboard/stats");

      const data = await response.json();
      setDashBoardData((prevData) => ({
        ...prevData,
        totalBins: data.totalBins,
        averageFill: data.avgFill,
        topWasteType: data.topWasteType,
        wardData: data.wardData,
      }));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  }, []);
  useEffect(() => {
    fetchData();
    const fetchInterval = setInterval(fetchData, 10000);
    return () => {
      clearInterval(fetchInterval);
    };
  }, [fetchData]);
  const analyticsContent = [
    {
      title: "Total Bins",
      content: `${dashBoardData.totalBins}${
        typeof dashBoardData.totalBins == "number" ? " bins" : ""
      } `,
    },
    {
      title: "Average Fill",
      content: `${Math.floor(dashBoardData.averageFill) || "Loading..."}${
        typeof dashBoardData.averageFill == "number" ? "%" : ""
      }`,
    },
    { title: "Top waste type", content: dashBoardData.topWasteType },
  ];

  const newInsights = insights.insights || ["Loading...."];
  const alerts = insights.alerts || ["Loading..."];
  const wardData = dashBoardData.wardData;
  return (
    <div className="flex h-screen bg-gray-50 relative md:static">
      <Sidebar />
      <main className="flex-1 overflow-y-auto w-9/10 md:w-auto md:ml-0 ml-16">
        <Topbar title="City Waste DashBoard" />
        {/* Analytics Stats Bar */}
        <div className="p-8">
          <div className="bg-primary p-4 gap-3 flex justify-evenly md:flex-row flex-col rounded-lg shadow-md items-center">
            {analyticsContent.map((item, index) => (
              <AnalyticsBar
                key={index}
                title={item.title}
                content={item.content}
                showImg
              />
            ))}
          </div>
        </div>
        {/* grid container */}
        <div className="grid grid-cols-1 grid-row-3 md:grid-cols-2 md:grid-rows-2 w-full gap-3 items-center justify-center px-6 py-3">
          {/* Dashboard Bar chart */}
          <div className="w-full h-full order-0 md:order-1">
            <BarChart
              data={wardData}
              title="Average Fill Levels per ward"
              height="300px"
              dataKey="value"
              nameKey="name"
              barColor="#16a34a"
            />
          </div>
          {/* AI recommendations */}
          <div className="bg-grey shadow-sm text-forest w-full h-full rounded-md p-6 flex flex-col gap-2 md:row-span-2">
            <p>AI insights</p>
            <div className="px-2">
              {newInsights.map((item, index) => (
                <li key={index} className="m-0">
                  {item}
                </li>
              ))}
            </div>
          </div>
          {/* Alerts */}
          <div className="bg-error shadow-sm text-forest w-full rounded-md justify-evenly p-4 flex flex-col gap-2 order-2">
            <p className="text-red-800 font-semibold text-lg">Daily Alerts</p>
            <div className="px-3 text-white flex justify-evenly gap-2 flex-col">
              {alerts.map((item, index) => (
                <li className="m-0" key={index}>
                  {item}
                </li>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
