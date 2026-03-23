import { useState } from "react";
import "./App.css";

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 120 },
    { id: 4, name: "Keyboard", price: 60 }
  ];

  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);

 const addItem = (product) => {
  const exist = cart.find((x) => x.id === product.id);

  if (exist) {
    alert("Item already added to cart!");
    return;
  }
  setCart([...cart, { ...product, qty: 1 }]);
};

  const increaseQty = (id) => {
    setCart(cart.map((x) =>x.id === id ? { ...x, qty: x.qty + 1 } : x));
  };
  const decreaseQty = (id) => {
    setCart(cart
        .map((x) =>x.id === id ? { ...x, qty: x.qty - 1 } : x)
        .filter((x) => x.qty > 0)
    );
  };
  const removeItem = (id) => {
    setCart(cart.filter((x) => x.id !== id));
  };
  const total = cart.reduce((sum, item) => sum + item.price * item.qty,0);

  return (
    <div className="container">
      <h1 className="title">Shopping Cart</h1>
      <div className="product-list">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addItem(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 className="cart-title">Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span className="qty">{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </td>

              <td>${item.price * item.qty}</td>

              <td>
                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="checkout-area">
        <button
          className="checkout-btn"
          onClick={() => setShowReceipt(true)}
        >
          Checkout
        </button>
      </div>

      {showReceipt && (
        <div className="receipt">
          <h2>Receipt</h2>

          {cart.map((item) => (
            <p key={item.id}>
              {item.name} x {item.qty} = ${item.price * item.qty}
            </p>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}

    </div>
  );
}
export default App;