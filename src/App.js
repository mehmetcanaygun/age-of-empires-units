import AppState from "./context/AppState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Units from "./components/pages/Units";
import UnitDetails from "./components/pages/UnitDetails";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:id" element={<UnitDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AppState>
  );
};

export default App;
