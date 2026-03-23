import React, { useState } from "react";
import "./app.css";
const productsData = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
  { id: 4, name: "Keyboard", price: 100 },
  { id: 5, name: "Mouse", price: 50 },
  {id:6, name:"Ram", price: 500}
];
function App() {
  const [searchName, setSearchName] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const filteredProducts = productsData.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;
    return matchesName && matchesPrice;
  });
  return (
    <div className="container">
      <h1>Products</h1>

      <div className="filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price..."
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;