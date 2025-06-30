import {
  createContext,
  useContext,
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
  const [bins, setBins] = useState([]);
  const [insights, setInsights] = useState({
    insights: [],
    alerts: [],
  });

  // Memoize fetch functions to prevent unnecessary re-renders
  const fetchBinData = useCallback(async () => {
    try {
      console.log("Fetching and syncing ");
      const response = await fetch("http://localhost:5000/api/bins");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const bins = data.data;
      console.log("Finished fetching and syncing ");
      setBins(bins);
    } catch (error) {
      console.error("Error fetching bin data:", error);
    }
  }, []);

  const fetchInsightsData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/recommendations");

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

  useEffect(() => {
    // Initial fetch
    fetchInsightsData();
    fetchBinData();
    const fetchInterval = setInterval(fetchBinData, 30000);
    // Cleanup function
    return () => {
      clearInterval(fetchInterval);
    };
  }, [fetchBinData, fetchInsightsData]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      bins,
      insights,
      refetchBins: fetchBinData,
      refetchInsights: fetchInsightsData,
    }),
    [bins, insights, fetchBinData, fetchInsightsData]
  );

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
};

export const useBinContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useBinContext must be used within a ContextProvider");
  }
  return context;
};
