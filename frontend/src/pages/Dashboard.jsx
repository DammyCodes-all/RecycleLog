import Sidebar from "../components/Sidebar";
import { Funnel } from "lucide-react";
import Button from "../components/ui/Button";
const DashBoard = () => {
  return (
    <div className="flex h-screen bg-gray-50 relative">
      <Sidebar />
      <main className="flex-1 overflow-y-auto w-9/10 md:w-auto ml-16 ">
        <div className="px-8 py-4 bg-grey flex justify-between items-center shadow-sm">
          <p className="font-bold text-lg text-forest">City Waste Dashboard</p>
          <Button className="text-mint bg-alert">
            Filters <Funnel />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
