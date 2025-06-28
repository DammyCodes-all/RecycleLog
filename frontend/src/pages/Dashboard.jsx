import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BarChart from "../components/BarChart";
import AnalyticsBar from "../components/AnalyticsBar";
import { useEffect, useState } from "react";
import { useBinContext } from "../appContext";

const DashBoard = () => {
  const { bins } = useBinContext();
  const [dashBoardData, setDashBoardData] = useState({
    bins: [],
    totalBins: 0,
    topWasteType: "  ",
    averageFill: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/dashboard/stats"
        );

        // Parse both responses in parallel
        const data = await response.json();
        console.log(data);

        setDashBoardData((prevData) => ({
          ...prevData,
          bins: bins,
          totalBins: data.totalBins,
          averageFill: data.avgFill,
          topWasteType: data.topWasteType,
        }));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, [bins]);
  const analyticsContent = [
    { title: "Total Bins", content: `${dashBoardData.totalBins} bins` },
    {
      title: "Average Fill",
      content: `${Math.floor(dashBoardData.averageFill)}%`,
    },
    { title: "Top waste type", content: dashBoardData.topWasteType },
  ];

  const insights = [
    "Based on last month's waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30%.",
    "High percentage of non-recyclables mixed with glass in Ward 7. Recommend signage or community education on proper sorting.",
    "Waste collection trends based on last month's waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30% on proper sorting.",
    "Based on last month's waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30%.",
    "High percentage of non-recyclables mixed with glass in Ward 7. Recommend signage or community education on proper sorting.",
    "Waste collection trends based on last month's waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30% on proper sorting.",
    "Based on last month's waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30%.",
    "High percentage of non-recyclables",
  ];

  const alerts = [
    "Waste collection trends based on last month's waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30% on proper sorting.",
    "Based on last month's waste profile, a composting education drive in Residential Wards could reduce organic landfill contribution by 30%.",
    "High percentage of non-recyclables",
  ];

  // Bar chart data for dashboard
  const getAvgFillByWard = (bins, ward) => {
    const wardBins = bins.filter((bin) => bin.ward === ward);
    return wardBins.length > 0
      ? Math.floor(
          wardBins.reduce((acc, bin) => acc + bin.bin_fill_percent, 0) /
            wardBins.length
        )
      : 0;
  };

  const wardData = [
    {
      name: "Ward A",
      value: getAvgFillByWard(dashBoardData.bins, "Ward A"),
    },
    { name: "Ward B", value: getAvgFillByWard(dashBoardData.bins, "Ward B") },
    { name: "Ward C", value: getAvgFillByWard(dashBoardData.bins, "Ward C") },
    { name: "Ward D", value: getAvgFillByWard(dashBoardData.bins, "Ward D") },
    { name: "Ward E", value: getAvgFillByWard(dashBoardData.bins, "Ward E") },
  ];

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
              title="Average Fill Levels"
              height="300px"
              dataKey="value"
              nameKey="name"
              barColor="#16a34a"
            />
          </div>{" "}
          {/* AI recommendations */}
          <div className="bg-grey shadow-sm text-forest w-full h-full rounded-md p-6 flex flex-col gap-2 md:row-span-2">
            <p>AI recommendations</p>
            <div className="px-3">
              {insights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>
          {/* Alerts */}
          <div className="bg-error shadow-sm text-forest w-full h-full rounded-md p-4 flex flex-col gap-2 order-2">
            <p className="text-red-800 font-semibold text-lg">Alerts</p>
            <div className="px-3 text-white flex justify-evenly gap-2 flex-col">
              {alerts.map((item, index) => (
                <li className="list-none" key={index}>
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
