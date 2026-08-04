export default function SearchBar({ value, onChange }) {
  console.count('RENDER: SearchBar');

  return (
    <label className="search-box">
      <span>Search products</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Try: smart electronics"
      />
    </label>
  );
}
