import React from "react";

function AdminDashboard() {
  const cardStyle = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "230px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#5C4033",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fdf6ec",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          background: "#8B4513",
          color: "white",
          padding: "25px",
          borderRadius: "15px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Admin Dashboard</h1>
        <p>Manage Platform Content, Transactions & Resolve Issues</p>
      </div>

      {/* Statistics Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={cardStyle}>
          <h2>150</h2>
          <p>Total Products</p>
        </div>

        <div style={cardStyle}>
          <h2>58</h2>
          <p>Orders Today</p>
        </div>

        <div style={cardStyle}>
          <h2>₹42,000</h2>
          <p>Revenue Summary</p>
        </div>

        <div style={cardStyle}>
          <h2>12</h2>
          <p>Customer Complaints</p>
        </div>
      </div>

      {/* Platform Management Section */}
      <div
        style={{
          marginTop: "40px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#8B4513", marginBottom: "20px" }}>
          Platform Management
        </h2>

        <ul style={{ lineHeight: "2", fontSize: "18px" }}>
          <li>✔ Manage Artisan Product Listings</li>
          <li>✔ Monitor Orders and Transactions</li>
          <li>✔ Resolve Customer Complaints & Issues</li>
          <li>✔ Verify Product Quality and Authenticity</li>
          <li>✔ Manage Promotions and Seasonal Offers</li>
          <li>✔ Approve New Artisan Registrations</li>
          <li>✔ Generate Reports and Revenue Insights</li>
        </ul>
      </div>

      {/* Recent Activities */}
      <div
        style={{
          marginTop: "40px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#8B4513", marginBottom: "20px" }}>
          Recent Admin Activities
        </h2>

        <p style={{ fontSize: "17px", lineHeight: "2" }}>
          • Approved 8 new artisan product uploads <br />
          • Resolved 5 customer complaints today <br />
          • Verified 12 payment transactions <br />
          • Added new tribal festival promotion campaign <br />• Updated
          cultural authenticity guidelines
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;
