import React from "react";

import consultant1 from "../assets/consultant1.jpg";
import consultant2 from "../assets/consultant2.jpg";
import consultant3 from "../assets/consultant3.jpg";

function ConsultantDashboard() {
  const reviews = [
    {
      id: 1,
      craft: "Bamboo Basket",
      artisan: "Sita Devi",
      status: "Approved",
      image: consultant1,
    },
    {
      id: 2,
      craft: "Clay Pottery Vase",
      artisan: "Mahesh Oraon",
      status: "Pending Review",
      image: consultant2,
    },
    {
      id: 3,
      craft: "Traditional Beaded Necklace",
      artisan: "Lata Kisku",
      status: "Verified",
      image: consultant3,
    },
  ];

  const handleApprove = (craft) => {
    alert(`${craft} approved successfully!`);
  };

  const handleReject = (craft) => {
    alert(`${craft} sent for correction`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fdf8f2",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          background: "#6B4226",
          color: "white",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <h1>Cultural Consultant Dashboard</h1>
        <p>
          Ensure traditional crafts are represented accurately and preserve
          tribal cultural heritage
        </p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px",
          justifyContent: "center",
        }}
      >
        <div style={cardStyle}>
          <h2>52</h2>
          <p>Crafts Reviewed</p>
        </div>

        <div style={cardStyle}>
          <h2>30</h2>
          <p>Approved Listings</p>
        </div>

        <div style={cardStyle}>
          <h2>12</h2>
          <p>Pending Verification</p>
        </div>

        <div style={cardStyle}>
          <h2>95%</h2>
          <p>Authenticity Score</p>
        </div>
      </div>

      {/* Verification Section */}
      <h2
        style={{
          color: "#6B4226",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Craft Verification & Heritage Review
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {reviews.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#ffffff",
              width: "280px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.craft}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <h3 style={{ padding: "15px 10px 5px" }}>{item.craft}</h3>

            <p>
              <strong>Artisan:</strong> {item.artisan}
            </p>

            <p
              style={{
                color: "#8B4513",
                fontWeight: "bold",
              }}
            >
              {item.status}
            </p>

            <button
              onClick={() => handleApprove(item.craft)}
              style={{
                background: "#2E8B57",
                color: "white",
                border: "none",
                padding: "10px 18px",
                margin: "8px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Approve
            </button>

            <button
              onClick={() => handleReject(item.craft)}
              style={{
                background: "#B22222",
                color: "white",
                border: "none",
                padding: "10px 18px",
                margin: "8px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Request Changes
            </button>
          </div>
        ))}
      </div>

      {/* Heritage Notes Section */}
      <div
        style={{
          marginTop: "50px",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#6B4226" }}>Cultural Heritage Notes</h2>

        <ul style={{ lineHeight: "2", fontSize: "17px" }}>
          <li>✔ Verify originality of tribal handmade crafts</li>
          <li>✔ Protect cultural identity and traditional methods</li>
          <li>✔ Ensure authentic descriptions for global buyers</li>
          <li>✔ Guide artisans in preserving heritage values</li>
          <li>✔ Prevent misuse of tribal cultural representation</li>
        </ul>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "15px",
  width: "220px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  color: "#4B2E2E",
};

export default ConsultantDashboard;
