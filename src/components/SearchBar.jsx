import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Telugu Movies..."
        value={search}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;