import React from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import basket from "../assets/basket.jpg";
import painting from "../assets/painting.jpg";

function Home() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Tribal Bamboo Basket",
      price: "₹500",
      image: basket,
      category: "bamboo",
    },
    {
      id: 2,
      name: "Warli Tribal Painting",
      price: "₹1200",
      image: painting,
      category: "painting",
    },
  ];

  // 🔴 UPDATE THIS PART
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search handicrafts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      {/* Display Products */}
      <div style={{ display: "flex", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
