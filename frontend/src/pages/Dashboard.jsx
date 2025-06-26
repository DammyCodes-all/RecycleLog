import Sidebar from "../components/Sidebar";
import Button from "../components/ui/Button";
import Topbar from "../components/Topbar";
import BarChart from "../components/BarChart";
import AnalyticsBar from "../components/AnalyticsBar";

const DashBoard = () => {
  const analyticsContent = [
    { title: "Total Bins", content: "10,871 bins" },
    { title: "Average Fill", content: "78%" },
    { title: "Top waste type", content: "Plastic" },
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
  const dashboardBarData = [
    { name: "Jan", value: 50 },
    { name: "Feb", value: 60 },
    { name: "Mar", value: 65 },
    { name: "Apr", value: 48 },
    { name: "May", value: 72 },
    { name: "Jun", value: 78 },
    { name: "Jul", value: 80 },
    { name: "Aug", value: 68 },
    { name: "Sep", value: 24 },
    { name: "Oct", value: 39 },
    { name: "Nov", value: 100 },
    { name: "Dec", value: 8 },
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
          {/* AI recommendations */}
          <div className="bg-grey shadow-sm text-forest w-full h-full rounded-md p-6 flex flex-col gap-2 md:row-span-2">
            <p>AI recommendations</p>
            <div className="px-3">
              {insights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>
          {/* Dashboard Bar chart */}
          <div className="w-full h-full">
            <BarChart
              data={dashboardBarData}
              title="Waste collection trends"
              height="300px"
              dataKey="value"
              nameKey="name"
              barColor="#16a34a"
            />
          </div>
          {/* Alerts */}
          <div className="bg-error shadow-sm text-forest w-full h-full rounded-md p-4 flex flex-col gap-2">
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
