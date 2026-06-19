import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearch("");
    onSearch("");
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Telugu Movies by title or genre..."
          value={search}
          onChange={handleChange}
          className="search-input"
        />
        {search && (
          <button className="search-clear" onClick={handleClear}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;