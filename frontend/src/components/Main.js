import React from "react";
import Features from "./Features";
import Categories from "./Categories";
import Products from "./Products";

export default function Main({
    categories,
    onCategory,
    choose,
    isChoose,
    onAdd,
    onBigImg,
    onNotification,
    products,
}) {
  return (
    <>
      <Features />
      <Categories
        categories={categories}
        onCategory={onCategory}
        choose={choose}
        isChoose={isChoose}
      />
      <Products
        onAdd={onAdd}
        onBigImg={onBigImg}
        onNotification={onNotification}
        products={products}
      />
    </>
  );
}
