import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import React, { useEffect, useState } from "react";
import { useBinContext } from "../appContext";
import { cn } from "../lib/utils";

const Rankings = () => {
  const [rankings, setRankings] = useState([]);
  const { bins } = useBinContext();

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/leaderboard/regions"
        );
        const data = await response.json();

        const formatted = data.map((item, index) => ({
          rank: index + 1,
          medal: getMedalByRank(index + 1),
          zone: item.region,
          fill: item.avgFill.toFixed(1),
          fillPercent: item.avgFill,
          status: getStatusByFill(item.avgFill),
          performance: getPerformanceLevel(index + 1, data.length),
        }));

        setRankings(formatted);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      }
    };

    fetchRankings();
    const fetchInterval = setInterval(fetchRankings, 10000);
    return clearInterval(fetchInterval);
  }, [bins]);

  const getMedalByRank = (rank) => {
    if (rank === 1) return "/First Medal.png";
    if (rank === 2) return "/Gold Medal.png";
    if (rank === 3) return "/Bronze Medal.png";
    return "/Silver Medal.png";
  };

  const getStatusByFill = (fillPercent) => {
    if (fillPercent < 40) return "Excellent";
    if (fillPercent < 60) return "Good";
    if (fillPercent < 80) return "Moderate";
    return "Needs Attention";
  };

  const getPerformanceLevel = (rank, total) => {
    const percentage = (rank / total) * 100;
    if (percentage <= 20) return "excellent";
    if (percentage <= 40) return "good";
    if (percentage <= 60) return "moderate";
    if (percentage <= 80) return "poor";
    return "critical";
  };

  const getStatusColors = (status) => {
    switch (status) {
      case "Excellent":
        return "text-green-600 bg-green-50";
      case "Good":
        return "text-blue-600 bg-blue-50";
      case "Moderate":
        return "text-yellow-600 bg-yellow-50";
      case "Needs Attention":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getFillColors = (fillPercent) => {
    if (fillPercent < 40) return "text-green-600 font-medium";
    if (fillPercent < 60) return "text-blue-600 font-medium";
    if (fillPercent < 80) return "text-yellow-600 font-medium";
    return "text-red-600 font-medium";
  };

  const getRowColors = (performance, rank) => {
    if (rank === 1)
      return "bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400";
    if (rank === 2)
      return "bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 border-gray-400";
    if (rank === 3)
      return "bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-400";

    switch (performance) {
      case "excellent":
        return "bg-green-25 hover:bg-green-50 border-l-4 border-green-300";
      case "good":
        return "bg-blue-25 hover:bg-blue-50 border-l-4 border-blue-300";
      case "moderate":
        return "bg-yellow-25 hover:bg-yellow-50 border-l-4 border-yellow-300";
      case "poor":
        return "bg-orange-25 hover:bg-orange-50 border-l-4 border-orange-300";
      case "critical":
        return "bg-red-25 hover:bg-red-50 border-l-4 border-red-300";
      default:
        return "hover:bg-gray-50";
    }
  };

  const getRankDisplay = (rank) => {
    const baseClasses =
      "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm";
    if (rank === 1)
      return cn(baseClasses, "bg-gradient-to-r from-yellow-400 to-yellow-600");
    if (rank === 2)
      return cn(baseClasses, "bg-gradient-to-r from-gray-400 to-gray-600");
    if (rank === 3)
      return cn(baseClasses, "bg-gradient-to-r from-orange-400 to-orange-600");
    if (rank <= 5)
      return cn(baseClasses, "bg-gradient-to-r from-green-400 to-green-600");
    if (rank <= 10)
      return cn(baseClasses, "bg-gradient-to-r from-blue-400 to-blue-600");
    return cn(baseClasses, "bg-gradient-to-r from-red-400 to-red-600");
  };

  return (
    <div className="flex h-screen bg-gray-50 relative md:static">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-16 md:ml-0">
        <Topbar title="Waste Community Rankings" />

        <div className="p-6 max-w-6xl mx-auto font-sans">
          {/* Hero card */}
          {rankings[0] && (
            <div className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-t-xl px-8 py-6 flex flex-col md:flex-row justify-between items-center shadow-lg">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src="/Award 2.png" alt="Badge" className="w-12 h-12" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-green-800">1</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{rankings[0].zone}</h2>
                  <p className="text-green-100">
                    Top Performer • {rankings[0].fill}% Avg Fill
                  </p>
                  <p className="text-sm text-green-200">
                    Leading waste management efficiency
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <p className="text-sm font-medium">Performance Score</p>
                  <p className="text-2xl font-bold text-yellow-300">A+</p>
                </div>
              </div>
            </div>
          )}

          <div className="overflow-x-auto bg-white rounded-b-xl shadow-lg">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Rank
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Zone/Ward
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Performance
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Avg Fill Level
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {rankings.map(
                  ({
                    rank,
                    medal,
                    zone,
                    fill,
                    fillPercent,
                    status,
                    performance,
                  }) => (
                    <tr
                      key={rank}
                      className={cn(
                        "border-b border-gray-100 transition-all duration-200",
                        getRowColors(performance, rank)
                      )}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={getRankDisplay(rank)}>{rank}</div>
                          <img src={medal} alt="medal" className="w-6 h-6" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {zone}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-700">
                            Waste Management
                          </span>
                          <span className="text-xs text-gray-500 capitalize">
                            {performance} efficiency
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={getFillColors(fillPercent)}>
                            {fill}%
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className={cn(
                                "h-2 rounded-full transition-all",
                                fillPercent < 40
                                  ? "bg-green-500"
                                  : fillPercent < 60
                                  ? "bg-blue-500"
                                  : fillPercent < 80
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              )}
                              style={{
                                width: `${Math.min(fillPercent, 100)}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-medium",
                            getStatusColors(status)
                          )}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rankings;
