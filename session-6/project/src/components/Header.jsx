export default function Header({ cartCount, favoriteCount, onToggleTips }) {
  console.count('RENDER: Header');

  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">React Performance Lab</p>
        <h1>Inventory Explorer</h1>
        <p className="subtitle">A deliberately inefficient product dashboard</p>
      </div>

      <div className="header-actions">
        <span className="status-pill">Favorites: {favoriteCount}</span>
        <span className="status-pill">Cart: {cartCount}</span>
        <button className="secondary-button" onClick={onToggleTips} type="button">
          Toggle tips
        </button>
      </div>
    </header>
  );
}
