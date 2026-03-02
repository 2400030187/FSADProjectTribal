import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ArtisanDashboard from "./pages/ArtisanDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ConsultantDashboard from "./pages/ConsultantDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/artisan" element={<ArtisanDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/consultant" element={<ConsultantDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
