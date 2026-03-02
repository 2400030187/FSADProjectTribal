import React from "react";
import basket from "../assets/basket.jpg";

function ArtisanDashboard() {
  return (
    <div className="container">
      <h2 className="dashboard-title">Artisan Dashboard</h2>

      <div className="card">
        <img src={basket} width="150" />
        <h3>Tribal Bamboo Basket</h3>
        <p>Status: Active</p>
        <button className="button">Edit Product</button>
      </div>
    </div>
  );
}

export default ArtisanDashboard;
