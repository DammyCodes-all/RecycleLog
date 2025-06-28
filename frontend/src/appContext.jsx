import { createContext, useContext, useEffect, useState } from "react";
const appContext = createContext({ bins: [] });
export const ContextProvider = ({ children }) => {
  const [bins, setBins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bins");
        const data = await response.json();
        const bins = data.data;
        setBins(bins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <appContext.Provider value={{ bins }}>{children}</appContext.Provider>;
};
export const useBinContext = () => useContext(appContext);
