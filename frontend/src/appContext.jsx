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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memoize fetch functions to prevent unnecessary re-renders
  const fetchBinData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/bins");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const bins = data.data;

      // Only update state if data has actually changed
      setBins((prevBins) => {
        const hasChanged = JSON.stringify(prevBins) !== JSON.stringify(bins);
        return hasChanged ? bins : prevBins;
      });

      setError(null);
    } catch (error) {
      console.error("Error fetching bin data:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
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

        setInsights((prevInsights) => {
          const hasChanged =
            JSON.stringify(prevInsights) !==
            JSON.stringify({
              insights: parsedData.insights,
              alerts: parsedData.alerts,
            });

          return hasChanged
            ? {
                insights: parsedData.insights || [],
                alerts: parsedData.alerts || [],
              }
            : prevInsights;
        });
      }
    } catch (error) {
      console.error("Error fetching insights data:", error);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchBinData();
    fetchInsightsData();

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
      isLoading,
      error,
      refetchBins: fetchBinData,
      refetchInsights: fetchInsightsData,
    }),
    [bins, insights, isLoading, error, fetchBinData, fetchInsightsData]
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
