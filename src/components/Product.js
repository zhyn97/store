/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Product({ item, onAdd, onBigImg, onNotification }) {
  return (
    <div className="product">
      <img className="product__img" src={`./img/${item.img}`} onClick={() => onBigImg(item)}></img>
      <p className="product__title">{item.title}</p>
      <p className="product__description">{item.desc}</p>
      <p className="product__price">{`${item.price} $`}</p>
      <button className="product__button" onClick={() => {
        onAdd(item);
        onNotification();
        }}>+</button>
    </div>
  );
}
