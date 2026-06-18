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
        placeholder="Search Movies..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;