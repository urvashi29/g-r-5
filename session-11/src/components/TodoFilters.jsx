export default function TodoFilters({ currentFilter, onFilterChange }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {filters.map((filterName) => (
        <button
          key={filterName}
          onClick={() => onFilterChange(filterName)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentFilter === filterName
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-pressed={currentFilter === filterName}
        >
          {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
        </button>
      ))}
    </div>
  );
}
