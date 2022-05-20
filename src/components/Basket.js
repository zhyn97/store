/* eslint-disable no-lone-blocks */
import React from "react";
import Order from "./Order";

export default function Basket({ isOpen, order, onDelete, onDeleteAll }) {
  function showOrder(order) {
    let summ = 0
    order.forEach(el => summ += Number.parseFloat(el.price));
    return (
      <div className="basket__container">
        {order.map((el) => (
          <Order key={el.id} order={el} onDelete={onDelete} />
        ))}
        <p className="basket__total-price">Total price: {summ.toFixed(2)} $</p>
        <button className="basket__delete-all" onClick={onDeleteAll}>Delete all</button>
      </div>
    );
  }

  function waringTask() {
    return (
      <div>
        <p className="basket__title">Cart is empty</p>
        <p className="basket__text">
          Add something to your cart to see the product
        </p>
      </div>
    );
  }

  return (
    <div className={`basket ${isOpen ? "basket_active" : ""}`}>
      {order.length > 0 ? showOrder(order) : waringTask()}
    </div>
  );
}
