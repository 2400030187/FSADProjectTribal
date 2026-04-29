import React from "react";

function ArtisanDashboard() {
  const products = [
    { id: 1, name: "Handmade Bamboo Basket", price: "₹499" },
    { id: 2, name: "Wooden Table Lamp", price: "₹1299" },
    { id: 3, name: "Tribal Beaded Necklace", price: "₹599" },
  ];

  const handleContact = () => {
    alert("Contacting other artisans...");
  };

  const handleUpload = () => {
    alert("Upload Product Page Opened");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff8f0",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#8B4513",
          color: "white",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h1>Artisan Dashboard</h1>
        <p>
          Create product listings, manage orders, and connect with customers
        </p>
      </div>

      {/* BUTTON */}
      <div style={{ textAlign: "right", marginTop: "30px" }}>
        <button
          onClick={handleUpload}
          style={{
            background: "#FFD700",
            color: "#5C4033",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Upload New Artifact
        </button>
      </div>

      {/* CONNECT */}
      <div
        style={{
          marginTop: "40px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#8B4513" }}>Connect with Other Artisans</h2>

        <p style={{ lineHeight: "2", fontSize: "17px" }}>
          Collaborate with skilled tribal artisans, share ideas, preserve
          traditional craftsmanship, and grow your market reach.
        </p>

        <button
          onClick={handleContact}
          style={{
            background: "#8B4513",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Contact Artisans
        </button>
      </div>

      {/* PRODUCTS */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ color: "#8B4513", marginBottom: "20px" }}>
          My Product Listings
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#ffffff",
                width: "250px",
                padding: "25px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{product.name}</h3>
              <h2 style={{ color: "#8B4513" }}>{product.price}</h2>

              <button
                style={{
                  background: "#A0522D",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Manage Orders
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtisanDashboard;
