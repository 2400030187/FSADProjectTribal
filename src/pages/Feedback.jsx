import React, { useState } from "react";

function Feedback() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback Submitted Successfully!");
    setMessage("");
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        background: "#fff8f0",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#8B4513" }}>Customer Feedback</h1>
      <p>Help us improve tribal artisan services</p>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="8"
          cols="50"
          placeholder="Write your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{
            background: "#8B4513",
            color: "white",
            padding: "12px 30px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Feedback;
