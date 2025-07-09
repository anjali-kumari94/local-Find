import React, { useState } from "react";

const ProductFilter = ({ categories = [], onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [maxDistance, setMaxDistance] = useState("");

  const handleChange = (field, value) => {
    if (field === "category") setCategory(value);
    if (field === "maxPrice") setMaxPrice(value);
    if (field === "maxDistance") setMaxDistance(value);
    onFilterChange({
      category: field === "category" ? value : category,
      maxPrice: field === "maxPrice" ? value : maxPrice,
      maxDistance: field === "maxDistance" ? value : maxDistance,
    });
  };

  const handleReset = () => {
    setCategory("");
    setMaxPrice("");
    setMaxDistance("");
    onFilterChange({ category: "", maxPrice: "", maxDistance: "" });
  };

  return (
    <form className="flex flex-wrap gap-4 items-end mb-6">
      <div>
        <label className="block text-xs font-semibold mb-1">Category</label>
        <select
          className="border rounded px-2 py-1"
          value={category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Max Price</label>
        <input
          type="number"
          className="border rounded px-2 py-1"
          value={maxPrice}
          min="0"
          onChange={(e) => handleChange("maxPrice", e.target.value)}
          placeholder="No limit"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">
          Max Distance (km)
        </label>
        <input
          type="number"
          className="border rounded px-2 py-1"
          value={maxDistance}
          min="0"
          onChange={(e) => handleChange("maxDistance", e.target.value)}
          placeholder="No limit"
        />
      </div>
      <button
        type="button"
        className="ml-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default ProductFilter;
