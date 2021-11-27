import AppState from "./context/AppState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppState>
  );
};

export default App;
