import React from "react";
import './style.css';

import { NavLink } from "react-router-dom";

const Header = () => (
    <header className="header">
  
      <h1 className="header__title">Superkvíz</h1>
  
      <nav className="menu">
        <NavLink to="/" className={({isActive}) => isActive ?  "menu__link menu__link--active" : "menu__link"}>Úvod</NavLink>
        <NavLink to="/kvizy" className={({isActive}) => isActive ? "menu__link menu__link--active" : "menu__link"}>Kvízy</NavLink>
        <NavLink to="/zebricek" className={({isActive}) => isActive ? "menu__link menu__link--active" : "menu__link"}>Žebříček</NavLink>
      </nav>
      
    </header>
  )

export default Header;