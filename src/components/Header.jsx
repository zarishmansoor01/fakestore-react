import React, { useState } from "react";

export default function Header({ cartCount, onCartClick, onToggleMenu }) {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
    onToggleMenu(); // tell App.jsx to open/close menu
  };

  return (
    <header className="topbar">
      <div className="left-section">
        <h1>
          <span style={{ color: "#fff" }}>🌸My</span>
          <span style={{ color: "#ff8fab" }}>Store</span>
        </h1>
      </div>

      <div className="right-section">
        <button className="cart-btn" onClick={onCartClick}>
          🛒 Cart ({cartCount})
        </button>

        {/* 🌸 Hamburger on right */}
        <div className={`hamburger ${active ? "active" : ""}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
}
