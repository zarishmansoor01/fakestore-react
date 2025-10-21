export default function SkeletonGrid() {
  // 8 placeholder cards just like your old JS loop
  const skeletons = Array.from({ length: 8 });

  return (
    <section id="product-list">
      {skeletons.map((_, i) => (
        <div className="product-card skeleton" key={i}>
          <div className="skeleton-img"></div>
          <div className="skeleton-line short"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      ))}
    </section>
  );
}
