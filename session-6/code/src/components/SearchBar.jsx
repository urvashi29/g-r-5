import React from "react";

const SearchBar = ({ value, searchInput }) => {
  return (
    <div>
      <input
        placeholder="Search products..."
        value={value}
        onChange={(e) => searchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
