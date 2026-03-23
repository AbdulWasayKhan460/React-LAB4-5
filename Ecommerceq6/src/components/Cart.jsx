function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items added.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} - Rs {item.price}
          </div>
        ))
      )}
    </div>
  );
}
export default Cart