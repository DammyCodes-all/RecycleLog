import { MapPin } from "lucide-react";
import FilterButton from "./ui/FilterButton";

const Topbar = ({ title = "AI Analytics" }) => (
  <div className="bg-[#e5f0e2] py-4 px-6 flex flex-col gap-3 sm:flex-row sm:justify-between items-start sm:items-center">
    <h1 className="text-xl md:text-lg font-semibold text-green-900">{title}</h1>
    {/* <div className="flex gap-3 w-full sm:w-auto">
      <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm flex-1 sm:flex-none">
        <input
          type="text"
          placeholder="Enter location"
          className="outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent w-full"
        />
        <MapPin className="w-4 h-4 text-gray-500 ml-2" />
      </div>
      <FilterButton />
    </div> */}
  </div>
);

export default Topbar;
