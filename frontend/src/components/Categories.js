import React from "react";

export default function Categories({ categories, onCategory, choose, isChoose}) {
  return (
    <div className="categories">
      {categories.map((el) => {
        return (
          <p
            className={`categories__item ${isChoose === el.key ? 'categories_active' : ''}`}
            key={el.key}
            onClick={() => {
              onCategory(el);
              choose(el);
            }}
          >
            {el.name}
          </p>
        );
      })}
    </div>
  );
}
