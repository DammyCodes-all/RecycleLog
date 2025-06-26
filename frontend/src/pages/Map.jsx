import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Map from "../components/Map";
const MapPage = () => {
  return (
    <div className="flex h-screen bg-gray-50 relative md:static">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-16 md:ml-0">
           <Topbar title="Heat Maps & Alerts" />
       <div className="max-w-7xl mx-auto p-6 space-y-6 font-sans">

      <div className="flex flex-col md:flex-row gap-6">
      
     <Map />

        <div className="w-full md:w-72 space-y-4">
          <h2 className="text-xl font-semibold text-red-600">Alerts</h2>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-md shadow text-sm border-l-4 border-red-300 text-red-700"
            >
              Based on last month’s waste profile, a composting education
              drive in Residential Wards could reduce organic landfill con
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-green-100 rounded-lg p-6 shadow">
          <p className="text-sm text-gray-600 mb-1">Total Active Bins</p>
          <p className="text-2xl font-bold text-green-900">10,781 bins</p>
          <p className="text-xs text-gray-500 mt-1">this month</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6 shadow">
          <p className="text-sm text-gray-600 mb-1">Bins Near Overflow</p>
          <p className="text-2xl font-bold text-green-900">23</p>
          <p className="text-xs text-gray-500 mt-1">this month</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6 shadow">
          <p className="text-sm text-gray-600 mb-1">Most Common Waste</p>
          <p className="text-2xl font-bold text-green-900">Plastic</p>
          <p className="text-xs text-gray-500 mt-1">this month</p>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
};

export default MapPage;
