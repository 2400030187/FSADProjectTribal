import React, { useState, useEffect } from "react";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";

const imageMap = {
  product1,
  product2,
  product3,
  product4,
  product5,
};

function CustomerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const handleBuyNow = (productName) => {
    alert(`Proceeding to buy ${productName}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fffaf3",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#8B4513",
          marginBottom: "30px",
        }}
      >
        Customer Dashboard
      </h1>

      <h2
        style={{
          textAlign: "center",
          color: "#A0522D",
          marginBottom: "30px",
        }}
      >
        Explore Tribal Handicrafts
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
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
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src={imageMap[product.imageUrl] || product1}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <h3 style={{ padding: "15px 10px 5px" }}>{product.name}</h3>

            <h2 style={{ color: "#8B4513" }}>{product.price}</h2>

            <button
              onClick={() => handleAddToCart(product.name)}
              style={{
                background: "#8B4513",
                color: "white",
                border: "none",
                padding: "10px 20px",
                margin: "10px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={() => handleBuyNow(product.name)}
              style={{
                background: "#FFD700",
                color: "#5C4033",
                border: "none",
                padding: "10px 20px",
                margin: "10px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerDashboard;
