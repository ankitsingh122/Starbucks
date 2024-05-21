import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Pay from "./pages/Pay";


function App() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);
  return (
    <>
      <Router>
        <div className="overflow-hidden">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Pay" element={<Pay />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
