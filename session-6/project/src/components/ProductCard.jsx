export default function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
  if (product.id <= 12) {
    console.count(`RENDER: ProductCard ${product.id}`);
  }

  return (
    <article className="product-card">
      <div className="product-card__topline">
        <span className="category-badge">{product.category}</span>
        <span className={product.stock < 20 ? 'stock stock--low' : 'stock'}>
          {product.stock} in stock
        </span>
      </div>

      <h3>{product.name}</h3>
      <p className="rating">★ {product.rating}</p>
      <strong className="price">₹{product.price}</strong>

      <div className="product-card__actions">
        <button
          className={isFavorite ? 'favorite-button favorite-button--active' : 'favorite-button'}
          onClick={() => onToggleFavorite(product.id)}
          type="button"
        >
          {isFavorite ? '★ Saved' : '☆ Save'}
        </button>
        <button className="primary-button" onClick={() => onAddToCart(product.id)} type="button">
          Add to cart
        </button>
      </div>
    </article>
  );
}
