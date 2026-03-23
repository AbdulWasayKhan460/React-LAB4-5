import { useState } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";
export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <nav >
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>
          Cart ({cart.length})
        </button>
        <button onClick={() => setPage("checkout")}>
          Checkout
        </button>
      </nav>
      {page === "home" && <Home />}
      {page === "products" && (
        <Products addToCart={addToCart} />)}
      {page === "cart" && <Cart cart={cart} />}
      {page === "checkout" && <Checkout cart={cart} />}
    </div>
  );
}
