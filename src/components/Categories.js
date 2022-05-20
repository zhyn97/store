import React from "react";

export default function Categories({ categories, onCategory}) {
  return (
    <div className="categories">
      {categories.map((el) => {
        return (
          <p
            className='categories__item'
            key={el.key}
            onClick={() => {
              onCategory(el);
            }}
          >
            {el.name}
          </p>
        );
      })}
    </div>
  );
}
