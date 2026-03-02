import React from "react";
import painting from "../assets/painting.jpg";

function CustomerDashboard() {
  return (
    <div className="container">
      <h2 className="dashboard-title">Customer Dashboard</h2>

      <div className="card">
        <img src={painting} width="150" />
        <h3>Warli Painting</h3>
        <p>₹1200</p>
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
}

export default CustomerDashboard;
