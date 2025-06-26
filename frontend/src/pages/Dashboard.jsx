import Sidebar from "../components/Sidebar";
import { Funnel } from "lucide-react";
import Button from "../components/ui/Button";
import Topbar from "../components/Topbar";
const DashBoard = () => {
  return (
    <div className="flex h-screen bg-gray-50 relative  md:static ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto w-9/10 md:w-auto md:ml-0 ml-16 ">
  <Topbar title="City Waste DashBoard" />
        <div className="p-8">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          {/* Additional content can be added here */}
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
