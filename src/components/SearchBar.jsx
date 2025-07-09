import React, { useState } from "react";

const SearchBar = ({
  suggestions = [],
  onSearch,
  placeholder = "Search...",
}) => {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0 && suggestions.length > 0) {
      const filteredSuggestions = suggestions.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(filteredSuggestions);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (value) => {
    setInput(value);
    setShowDropdown(false);
    if (onSearch) onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(input);
    setShowDropdown(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        autoComplete="off"
      />
      {showDropdown && filtered.length > 0 && (
        <ul className="absolute bg-white border rounded w-full mt-1 z-10 max-h-48 overflow-y-auto shadow">
          {filtered.map((s, i) => (
            <li
              key={i}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
