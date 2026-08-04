import { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import FilterPanel from './components/FilterPanel.jsx';
import SummaryPanel from './components/SummaryPanel.jsx';
import ProductList from './components/ProductList.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import { products, categoryOptions } from './data/products.js';
import { calculateSummary, getVisibleProducts } from './utils/catalog.js';

export default function App() {
  console.count('RENDER: App');

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('name');
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const [cartCount, setCartCount] = useState(0);
  const [showTips, setShowTips] = useState(true);

  // Deliberately inefficient: these calculations run on every App render.
  const visibleProducts = getVisibleProducts(products, searchTerm, category, maxPrice, sortBy);
  const summary = calculateSummary(visibleProducts);

  // Deliberately inefficient: new function references are created on every render.
  function handleToggleFavorite(productId) {
    setFavoriteIds((currentIds) => {
      const nextIds = new Set(currentIds);
      if (nextIds.has(productId)) nextIds.delete(productId);
      else nextIds.add(productId);
      return nextIds;
    });
  }

  function handleAddToCart() {
    setCartCount((currentCount) => currentCount + 1);
  }

  function handleToggleTips() {
    setShowTips((currentValue) => !currentValue);
  }

  return (
    <>
      <ScrollProgress />
      <main className="app-shell">
        <Header
          cartCount={cartCount}
          favoriteCount={favoriteIds.size}
          onToggleTips={handleToggleTips}
        />

        {showTips && (
          <aside className="tip-banner">
            Open the browser console. Type, filter, scroll, save a product, add to cart, and toggle
            this banner. Look for work that repeats unnecessarily.
          </aside>
        )}

        <section className="controls-card">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterPanel
            categories={categoryOptions}
            category={category}
            maxPrice={maxPrice}
            sortBy={sortBy}
            onCategoryChange={setCategory}
            onMaxPriceChange={setMaxPrice}
            onSortChange={setSortBy}
          />
        </section>

        <SummaryPanel summary={summary} />

        <div className="results-heading">
          <div>
            <p className="eyebrow">Results</p>
            <h2>Showing up to 60 products</h2>
          </div>
          <span>{visibleProducts.length} total matches</span>
        </div>

        <ProductList
          products={visibleProducts}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
          onAddToCart={handleAddToCart}
        />
      </main>
    </>
  );
}
