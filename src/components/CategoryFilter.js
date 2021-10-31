import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category.id === selectedCategory ? "selected" : null;
    return (
      <button
        key={category.id}
        className={className}
        onClick={() => onSelectCategory(category.id)}>{category.name}
      </button>
    );
  });

  const className = !selectedCategory ? "selected" : null;

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        key={0}
        className={className}
        onClick={() => onSelectCategory(null)}>All</button>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
