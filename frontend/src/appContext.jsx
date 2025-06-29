import { createContext, useContext, useEffect, useState } from "react";
const appContext = createContext({
  bins: [],
  insights: { insights: [], alerts: [] },
});
export const ContextProvider = ({ children }) => {
  const [bins, setBins] = useState([]);
  const [insights, setInsights] = useState({
    insights: [],
    alerts: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bins");
        const response2 = await fetch(
          "http://localhost:5000/api/recommendations"
        );
        const data2 = await response2.json();
        const parsedData = JSON.parse(data2[0].text);
        const data = await response.json();
        const bins = data.data;
        setBins(bins);
        setInsights({
          insights: parsedData.insights,
          alerts: parsedData.alerts,
        });
        console.log('All context data fetched')
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <appContext.Provider value={{ bins, insights }}>
      {children}
    </appContext.Provider>
  );
};
export const useBinContext = () => useContext(appContext);
