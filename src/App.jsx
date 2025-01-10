import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Explort from "./pages/Explore";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Explort />} />

        {/* <Route path="artist/:slug" element={<Artist />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
