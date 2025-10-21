export default function NavMenu({ open, onCategory, onContact }) {
  return (
    <div className={`nav-menu ${open ? "open" : ""}`}>
      <ul>
        <li><a onClick={() => onCategory("home")}>Home</a></li>
        <li><a onClick={() => onCategory("men's clothing")}>Men</a></li>
        <li><a onClick={() => onCategory("women's clothing")}>Women</a></li>
        <li><a onClick={() => onCategory("jewellery")}>Jewellery</a></li>
        <li><a onClick={() => onCategory("gadgets")}>Gadgets</a></li>
        <li><a onClick={onContact}>Contact</a></li>
      </ul>
    </div>
  );
}
