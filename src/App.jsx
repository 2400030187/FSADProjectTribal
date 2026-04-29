import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ArtisanDashboard from "./pages/ArtisanDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ConsultantDashboard from "./pages/ConsultantDashboard";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARDS */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/artisan" element={<ArtisanDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/consultant" element={<ConsultantDashboard />} />

        {/* FEEDBACK */}
        <Route path="/feedback" element={<Feedback />} />

        {/* FALLBACK (prevents blank screen issues) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
