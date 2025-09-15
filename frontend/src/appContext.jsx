import {
  createContext,
  use,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

const appContext = createContext({
  bins: [],
  insights: { insights: [], alerts: [] },
  isLoading: false,
  error: null,
});

export const ContextProvider = ({ children }) => {
  const [insights, setInsights] = useState({
    insights: [],
    alerts: [],
  });
  const [mapData, setMapData] = useState([]);

  const fetchInsightsData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://recyclelog-1.onrender.com/api/recommendations"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data[0] && data[0].text) {
        const parsedData = JSON.parse(data[0].text);

        setInsights(parsedData);
      }
    } catch (error) {
      console.error("Error fetching insights data:", error);
    }
  }, []);
  const fetchMapData = useCallback(async () => {
    try {
      const response2 = await fetch(
        "https://recyclelog-1.onrender.com/api/map/heatmap"
      );
      const data2 = await response2.json();
      setMapData(data2.data);
    } catch (error) {
      console.error("Error fetching map data: ", error);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchInsightsData();
    fetchMapData();
    const fetchInterval = setInterval(() => {
      fetchMapData();
    }, 20000);
    // Cleanup function
    return () => {
      clearInterval(fetchInterval);
    };
  }, [fetchInsightsData, fetchMapData]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      insights,
      mapData,
      refetchInsights: fetchInsightsData,
    }),
    [insights, fetchInsightsData, mapData]
  );

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
};

export const useBinContext = () => {
  const context = use(appContext);
  if (!context) {
    throw new Error("useBinContext must be used within a ContextProvider");
  }
  return context;
};
