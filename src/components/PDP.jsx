export default function PDP({ product, onClose, onAdd }) {
  return (
    <div className="pdp-overlay open">
      <div className="pdp-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <button className="btn-primary" onClick={onAdd}>Add to Cart</button>
      </div>
    </div>
  );
}
