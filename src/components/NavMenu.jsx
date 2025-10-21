import React from "react";

export default function NavMenu({ open, onCategory, onContact }) {
  const handleClick = (e, fn, arg) => {
    e.preventDefault();
    fn(arg);
  };

  return (
    <div className={`nav-menu ${open ? "open" : ""}`}>
      <ul>
        <li><a href="#" onClick={(e) => handleClick(e, onCategory, "home")}>Home</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, onCategory, "men's clothing")}>Men</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, onCategory, "women's clothing")}>Women</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, onCategory, "jewellery")}>Jewellery</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, onCategory, "gadgets")}>Gadgets</a></li>
        <li><a href="#" onClick={(e) => handleClick(e, onContact)}>Contact</a></li>
      </ul>
    </div>
  );
}
