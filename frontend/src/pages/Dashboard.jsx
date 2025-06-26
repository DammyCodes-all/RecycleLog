import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
const DashBoard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
           <Topbar title="City Waste Dashboard" />
        <div className="p-6 text-black">bhjbjmk;l'</div>
      </main>
    </div>
  );
};

export default DashBoard;
