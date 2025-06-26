import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import MapPage from "./pages/Map.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Rankings from "./pages/Rankings.jsx";
import Analytics from "./pages/Analytics.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/rankings" element={<Rankings />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
