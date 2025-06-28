import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Map from "../components/Map";
import AnalyticsBar from "../components/AnalyticsBar";
import { useBinContext } from "../appContext";
import { useState, useEffect } from "react";
const MapPage = () => {
  const [statsData, setStatsData] = useState([
    { title: "Total Active Bins", content: "10,781 bins" },
    { title: "Bins Near Overflow", content: "23" },
    { title: "Most Common Waste", content: "Plastic" },
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
  }, []);
  const { bins } = useBinContext();

  return (
    <div className="flex h-screen bg-gray-50 relative md:static">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-16 md:ml-0">
        <Topbar title="Heat Maps & Alerts" />
        <div className="max-w-7xl mx-auto p-6 space-y-6 font-sans">
          <div className="flex flex-col md:flex-row gap-6">
            <Map bins={bins} />

            <div className="w-full md:w-72 space-y-4">
              <h2 className="text-xl font-semibold text-red-600">Alerts</h2>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-md shadow text-sm border-l-4 border-red-300 text-red-700"
                >
                  Based on last month's waste profile, a composting education
                  drive in Residential Wards could reduce organic landfill con
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
