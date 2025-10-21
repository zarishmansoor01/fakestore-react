export default function Cart({ cart, onClose, onQtyChange }) {
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <aside id="cart" className="open">
      <span className="close-btn" onClick={onClose}>&times;</span>
      <h2>Your Cart</h2>
      <div id="cartItems">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div style={{ flex: 1 }}>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <div>
                <button onClick={() => onQtyChange(item.id, -1)}>-</button>
                <span style={{ margin: "0 8px" }}>{item.qty}</span>
                <button onClick={() => onQtyChange(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="cart-summary">
        <p><b>Total:</b> ${total.toFixed(2)}</p>
      </div>
    </aside>
  );
}
