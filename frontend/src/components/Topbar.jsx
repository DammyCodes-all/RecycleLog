import { MapPin, Filter } from 'lucide-react';

const Topbar = ({ title = "AI Analytics" }) => {
  return (
    <div className="bg-[#e5f0e2] py-4 px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-green-900">{title}</h1>
      <div className="flex gap-3">
        <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Enter location"
            className="outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
          />
          <MapPin className="w-4 h-4 text-gray-500 ml-2" />
        </div>
        <button className="flex items-center gap-1 bg-white text-green-600 px-4 py-2 rounded-md shadow-sm hover:bg-green-50">
          <span className="text-sm font-medium">Filters</span>
          <Filter className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
