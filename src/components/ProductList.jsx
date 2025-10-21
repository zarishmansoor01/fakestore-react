import ProductCard from "./ProductCard";

export default function ProductList({ products, onProductClick }) {
  return (
    <section id="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onClick={onProductClick} />
      ))}
    </section>
  );
}
