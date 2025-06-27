import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import React from "react";

const rankings = [
  {
    rank: 1,
    medal: "./First Medal.png",
    zone: "Zone CV",
    fill: "82%",
    status: "clean",
  },
  {
    rank: 2,
    medal: "/Gold Medal.png",
    zone: "Zone CV",
    fill: "82%",
    status: "clean",
  },
  {
    rank: 3,
    medal: "/Bronze Medal.png",
    zone: "Zone CV",
    fill: "82%",
    status: "clean",
  },
  {
    rank: 4,
    medal: "/Silver Medal.png",
    zone: "Zone CV",
    fill: "82%",
    status: "clean",
  },
  {
    rank: 5,
    medal: "/Silver Medal.png",
    zone: "Zone CV",
    fill: "82%",
    status: "clean",
  },
  {
    rank: 6,
    medal: "/Silver Medal.png",
    zone: "Zone CV",
    fill: "city",
    status: "clean",
  },
  {
    rank: 7,
    medal: "/Silver Medal.png",
    zone: "Zone CV",
    fill: "city",
    status: "raning",
  },
];

const Rankings = () => {
  return (
    <div className="flex h-screen bg-gray-50 relative md:static">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-16 md:ml-0">
        <Topbar title="Waste Community Rankings" />

        <div className="p-6 max-w-6xl mx-auto font-sans">
          <div className="bg-green-800 text-white rounded-t-xl px-8 py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="/Award 2.png" alt="Badge" className="w-10 h-10" />
              <div>
                <h2 className="text-2xl font-bold">Zone Cv</h2>
                <p className="text-sm">Bin: #2444</p>
              </div>
            </div>
            <p className="text-sm mt-4 md:mt-0 text-right max-w-md text-ellipsis whitespace-nowrap overflow-hidden">
              most improved most improved most improved most improved
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-b-xl shadow-md">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-white border-b border-gray-200 text-gray-700">
                <tr>
                  <th className="px-6 py-3">Rank</th>
                  <th className="px-6 py-3">Zone/Ward</th>
                  <th className="px-6 py-3">Key Metric</th>
                  <th className="px-6 py-3">Bin Fill</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {rankings.map(({ rank, medal, zone, fill, status }) => (
                  <tr
                    key={rank}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium flex items-center gap-2">
                      {rank} <img src={medal} alt="medal" className="w-5 h-5" />
                    </td>
                    <td className="px-6 py-4">{zone}</td>
                    <td className="px-6 py-4 text-green-500 font-medium">
                      Key metric
                    </td>
                    <td className="px-6 py-4 text-green-500 font-medium">
                      {fill}
                    </td>
                    <td className="px-6 py-4 text-green-500 font-medium">
                      {status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rankings;
