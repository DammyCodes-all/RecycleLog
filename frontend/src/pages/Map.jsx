import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Map from "../components/Map";
const MapPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
           <Topbar title="Heat Maps & Alerts" />
       <div className="max-w-7xl mx-auto p-6 space-y-6 font-sans">

      <div className="flex flex-col md:flex-row gap-6">
      
        <div className="flex-1 relative rounded-xl overflow-hidden shadow-md">
          <Map /> 
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-3 rounded-md shadow-lg text-sm border border-gray-200 w-60">
            <p className="font-bold text-green-800 text-lg">
              Bin ID : <span className="text-yellow-500">#4444</span>
            </p>
            <p>
              Waste type <span className="font-bold">Plastic</span> &nbsp;&nbsp;
              Fill %: <span className="font-bold text-green-700">23</span>
            </p>
          </div>
       
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="bg-white p-2 rounded shadow hover:bg-gray-100">🔍</button>
            <button className="bg-white p-2 rounded shadow hover:bg-gray-100">🔎</button>
          </div>
        </div>

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
