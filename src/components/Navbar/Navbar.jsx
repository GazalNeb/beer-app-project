import React from 'react';
import "./NavBar.scss";
import brewdogLogo from "../../assets/images/brewdog-logo.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <h2 className='nav__item'>Search</h2>
      <img className='nav__item nav__item--image' src={brewdogLogo} />
      <h2 className='nav__item'>Filters</h2>
    </nav>
  )
}

export default NavBar;