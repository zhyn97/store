/* eslint-disable array-callback-return */
import React from "react";
import Product from "./Product";

export default function Products({ onAdd, onBigImg, onNotification, products}) {

  return (
    <main className="main">
      {products.map((el) => {
        return <Product key={el._id} item={el} onAdd={onAdd} onBigImg={onBigImg} onNotification={onNotification} />;
      })}
    </main>
  );
}
