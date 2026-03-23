export default function Products({ addToCart }) {
  const products = [
    { id: 1, name: "Shoes", price: 1500 },
    { id: 2, name: "Earphones", price: 900 },
    { id: 3, name: "Smart-Watch", price: 2000 },
    { id: 4, name: "Shampoo", price: 400 }
  ];
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="card-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Rs {item.price}</p>
            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}