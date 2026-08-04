import ProductCard from './ProductCard.jsx';

export default function ProductList({ products, favoriteIds, onToggleFavorite, onAddToCart }) {
  console.count('RENDER: ProductList');

  if (products.length === 0) {
    return <div className="empty-state">No products match the current filters.</div>;
  }

  return (
    <section className="product-grid" aria-label="Products">
      {products.slice(0, 60).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favoriteIds.has(product.id)}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}
