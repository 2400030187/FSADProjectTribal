import React from "react";
function AdminDashboard() {
  return (
    <div className="container">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="card">
        <h3>Platform Analytics</h3>
        <p>Total Users: 120</p>
        <p>Total Products: 75</p>
      </div>

      <div className="card">
        <h3>Manage Issues</h3>
        <button className="button">Resolve Complaints</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
