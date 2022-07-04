import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileMenu({open, order, openMenu}) {
  const active = ({isActive}) => isActive ? 'header__menu_mob-active' : '';

  return (
    <div className={`header__menu_mob ${openMenu ? 'header__menu_active' : ''}`}>
        <ul>
        <li onClick={open} className="header__button">
          Cart ( <span className="header__button_numb">{ order.length }</span> )
        </li>
        <li className='header__menu_mob-text'><NavLink className={ active } to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><NavLink to="/cabinet">Cabinet</NavLink></li>
      </ul>
    </div>
  )
}
