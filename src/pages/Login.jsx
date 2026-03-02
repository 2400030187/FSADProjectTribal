import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "admin") navigate("/admin");
    if (role === "artisan") navigate("/artisan");
    if (role === "customer") navigate("/customer");
    if (role === "consultant") navigate("/consultant");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="dashboard-title">TribalKart Login</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
        >
          <option value="customer">Customer</option>
          <option value="artisan">Artisan</option>
          <option value="admin">Admin</option>
          <option value="consultant">Cultural Consultant</option>
        </select>

        <br />
        <br />

        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
