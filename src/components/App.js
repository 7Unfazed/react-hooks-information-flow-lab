import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (category) => {setSelectedCategory(category);};


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header  isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} >
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <Filter onCategoryChange={handleCategoryChange} /> {/* Use the Filter component */}
      <ShoppingList items={itemData.filter(item => selectedCategory === "All" || item.category === selectedCategory)} />
    </div>
  );
}

export default App;
