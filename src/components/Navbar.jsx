import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/?search=${search}`);
  };

  return (
    <nav style={{ background: "#333", padding: "10px", color: "white" }}>
      <h2 style={{ display: "inline" }}>TribalKart</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: "20px", padding: "5px" }}
      />

      <button onClick={handleSearch}>Search</button>
    </nav>
  );
}

export default Navbar;
