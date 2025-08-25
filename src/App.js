import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Firstsection from "./components/Firstsection";
import Secondsection from "./components/Secondsection";
import Thirdsection from "./components/Thirdsection";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Firstsection />} />

        {/* Slider route */}
        <Route path="/secondsection" element={<Secondsection />} />

      {/* Slider route */}
        <Route path="/thirdsection" element={<Thirdsection />} />


      </Routes>
    </Router>
  );
}
