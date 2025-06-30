import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Map from "../components/Map";
import AnalyticsBar from "../components/AnalyticsBar";
import { useBinContext } from "../appContext";
import { useState, useEffect } from "react";
const MapPage = () => {
  const { bins, insights, mapData } = useBinContext();
  const [statsData, setStatsData] = useState([
    { title: "Total Active Bins", content: "Loading..." },
    { title: "Bins Near Overflow", content: "Loading..." },
    { title: "Most Common Waste", content: "Loading..." },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/dashboard/stats"
        );

        // Parse both responses in parallel
        const data = await response.json();
        setStatsData([
          { title: "Total Active Bins", content: data.totalBins },
          { title: "Bins Near Overflow", content: data.overflowCount },
          { title: "Most Common Waste", content: data.topWasteType },
        ]);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, [bins]);
  const alerts = insights.alerts || [];
  return (
    <div className="flex h-screen bg-gray-50 relative md:static">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-16 md:ml-0">
        <Topbar title="Heat Maps & Alerts" />
        <div className="max-w-7xl mx-auto p-6 space-y-6 font-sans">
          <div className="flex flex-col md:flex-row gap-6">
            <Map bins={mapData} />

            <div className="w-full md:w-72 space-y-4">
              <h2 className="text-xl font-semibold text-red-600">Alerts</h2>
              {alerts.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow text-sm border-l-4 border-red-300 text-red-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section using AnalyticsBar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statsData.map((stat, index) => (
              <AnalyticsBar
                key={index}
                title={stat.title}
                content={stat.content}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapPage;
