function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid gray",
    padding: "15px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

export default ProductCard;
