/* eslint-disable array-callback-return */
import React from "react";
import Product from "./Product";

export default function Products({ items, onAdd, onBigImg, onNotification }) {
  return (
    <main className="main">
      {items.map((el) => {
        return <Product key={el.id} item={el} onAdd={onAdd} onBigImg={onBigImg} onNotification={onNotification} />;
      })}
    </main>
  );
}
