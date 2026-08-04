export default function FilterPanel({
  categories,
  category,
  maxPrice,
  sortBy,
  onCategoryChange,
  onMaxPriceChange,
  onSortChange,
}) {
  console.count('RENDER: FilterPanel');

  return (
    <section className="filter-panel" aria-label="Catalogue filters">
      <label>
        <span>Category</span>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Maximum price: ₹{maxPrice}</span>
        <input
          type="range"
          min="50"
          max="1000"
          step="25"
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(Number(event.target.value))}
        />
      </label>

      <label>
        <span>Sort by</span>
        <select value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          <option value="name">Name</option>
          <option value="price-low">Price: Low to high</option>
          <option value="price-high">Price: High to low</option>
          <option value="rating">Rating</option>
        </select>
      </label>
    </section>
  );
}
