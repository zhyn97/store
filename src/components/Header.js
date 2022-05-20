/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Basket from "./Basket";

export default function Header({ open, isOpen, order, onDelete, onDeleteAll }) {
  return (
    <header className="header">
      <span className="header__logo">Home Staff</span>
      <ul className="header__menu">
        <li onClick={open} className="header__button">
          Cart (<span className="header__button_numb">{order.length}</span>)
        </li>
        <li>About Us</li>
        <li>Contacts</li>
        <li>Cabinet</li>
      </ul>
      <Basket isOpen={isOpen} order={order} onDelete={onDelete} onDeleteAll={onDeleteAll}/>
      <div className="header__presentation"></div>
    </header>
  );
}
