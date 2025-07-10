import { useState, useCallback, useEffect } from "react";
const useGetApi = (url, duration = 50000) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null); // ✅ Add error state

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null); // ✅ Clear previous errors

      const response = await fetch(url);

      if (!response.ok) {
        // ✅ Handle HTTP errors
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message); // ✅ Expose error to components
    } finally {
      setLoading(false); // ✅ Only set loading false once
    }
  }, [url]);

  const refetch = useCallback(() => {
    // ✅ Manual refetch
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();

    if (duration) {
      const fetchInterval = setInterval(fetchData, duration);
      return () => clearInterval(fetchInterval);
    }
  }, [fetchData, duration]);

  return [data, loading, error, refetch]; // ✅ Object return for flexibility
};
export { useGetApi };
