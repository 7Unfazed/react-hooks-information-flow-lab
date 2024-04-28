import React, { useState } from "react";

function Filter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      <option value="All">All</option>
      <option value="Food">Food</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
    </select>
  );
}

export default Filter;