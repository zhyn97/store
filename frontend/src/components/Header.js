/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Basket from "./Basket";
import MobileMenu from "./MobileMenu";
import iconMenu from "../img/iconMenu.svg";
import closeMenu from "../img/closeMenu.svg";
import { Link } from "react-router-dom";

export default function Header({ open, isOpen, order, onDelete, onDeleteAll }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  function openMenuButton() {
    setOpenMenu(!openMenu);
  }

  return (
    <header className="header">
      <span className="header__logo">Home Staff</span>
      <ul className="header__menu">
        <li onClick={open} className="header__button">
          Cart (<span className="header__button_numb">{order.length}</span>)
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/cabinet">Cabinet</Link></li>
      </ul>
      <img
        onClick={openMenuButton}
        alt="menu"
        src={openMenu ? closeMenu : iconMenu}
        className="header__mobile-button"
      ></img>
      <Basket
        isOpen={isOpen}
        order={order}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
      />
      <MobileMenu open={open} order={order} openMenu={openMenu} />
      <div className="header__presentation"></div>
    </header>
  );
}
