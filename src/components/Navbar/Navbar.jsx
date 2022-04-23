import React from 'react';
import "./NavBar.scss";
import brewdogLogo from "../../assets/images/brewdog-logo.png";
import SearchBox from "../../components/SearchBox/SearchBox";

const NavBar = ({searchTerm, handleInput}) => {
  return (
    <nav className="nav">
      <SearchBox label={"Search"} searchTerm={searchTerm} handleInput={handleInput} />
      <img className='nav__image' src={brewdogLogo} />
      <h2 className='nav__filters'>Filters</h2>
    </nav>
  )
}

export default NavBar;