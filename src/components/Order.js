import React from "react";

export default function Order({order, onDelete}) {
  return (
    <div className="order">
      <img className="order__img" alt={order.title} src={`./img/${order.img}`}></img>
      <p className="order__title">{order.title}</p>
      <p className="order__price">{`${order.price} $`}</p>
      <img className="order__deleteButton" src={"./img/trash.svg"} alt="delet" onClick={() => onDelete(order.id)}></img>
    </div>
  );
}
