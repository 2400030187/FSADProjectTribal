import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password || !role) {
      alert("Please enter Username, Password and Select Role");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.role === "admin") navigate("/admin");
        else if (data.role === "artisan") navigate("/artisan");
        else if (data.role === "customer") navigate("/customer");
        else if (data.role === "consultant") navigate("/consultant");
        else alert("Invalid role received");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: "#8B4513", textAlign: "center" }}>Welcome Back</h1>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "25px" }}>
          Login to Tribal Handicrafts Marketplace
        </p>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {/* Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={inputStyle}
        >
          <option value="">-- Select Role --</option>
          <option value="admin">Admin</option>
          <option value="artisan">Artisan</option>
          <option value="customer">Customer</option>
          <option value="consultant">Cultural Consultant</option>
        </select>

        {/* BUTTON */}
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      </div>
    </div>
  );
}

/* STYLES */
const containerStyle = {
  minHeight: "100vh",
  background: "#fff8f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
  fontFamily: "Arial",
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "20px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  maxWidth: "500px",
  width: "100%",
  padding: "40px",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  marginBottom: "15px",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  background: "#8B4513",
  color: "white",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
};

export default Login;
