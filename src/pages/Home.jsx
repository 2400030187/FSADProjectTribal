import React from "react";
import { useNavigate } from "react-router-dom";

import logoImg from "../assets/logo.png";
import tribalCraftImg from "../assets/tribalcraft.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff8f0",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}
      <div
        style={{
          background: "#8B4513",
          color: "white",
          padding: "50px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <img
            src={logoImg}
            alt="Logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginBottom: "20px",
              objectFit: "cover",
              border: "3px solid #FFD700",
            }}
          />

          <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
            Tribal Handicrafts Marketplace
          </h1>

          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            Empowering tribal artisans by promoting traditional handcrafted
            products globally.
          </p>

          {/* ✅ FIXED BUTTON */}
          <button
            onClick={() => navigate("/login")}
            style={{
              marginTop: "20px",
              background: "#FFD700",
              color: "#5C4033",
              border: "none",
              padding: "14px 30px",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Explore Crafts
          </button>
        </div>

        <img
          src={tribalCraftImg}
          alt="Tribal Crafts"
          style={{
            width: "380px",
            height: "250px",
            borderRadius: "15px",
            objectFit: "cover",
            marginTop: "20px",
          }}
        />
      </div>

      {/* FEATURES (unchanged) */}
      <div style={{ padding: "40px 30px" }}>
        <h2 style={{ textAlign: "center", color: "#8B4513" }}>
          Our Platform Features
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={cardStyle}>
            <h3>For Artisans</h3>
            <p>Upload and sell handcrafted products globally.</p>
          </div>

          <div style={cardStyle}>
            <h3>For Customers</h3>
            <p>Discover authentic tribal handmade products easily.</p>
          </div>

          <div style={cardStyle}>
            <h3>For Consultants</h3>
            <p>Protect cultural authenticity and heritage values.</p>
          </div>

          <div style={cardStyle}>
            <h3>For Admin</h3>
            <p>Manage users and platform operations.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: "#5C4033",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <p>© 2026 Tribal Handicrafts Platform</p>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "15px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

export default Home;
