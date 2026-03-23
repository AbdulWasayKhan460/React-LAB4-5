function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="receipt">
        <h3>Order:</h3>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="receipt-item">
                {item.name} - Rs {item.price}
              </div>
            ))}
            <h3>Total: Rs {total}</h3>
          </>
        )}
      </div>
      <form className="checkout-form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Phone Number" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
export default Checkout;