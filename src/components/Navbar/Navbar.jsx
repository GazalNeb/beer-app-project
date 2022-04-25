import React, { useState } from 'react';
import "./NavBar.scss";
import brewdogLogo from "../../assets/images/brewdog-logo.png";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const NavBar = ({searchTerm, handleInput, handleFilterInput}) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <nav className="nav">
      {showFilters && <FiltersList toggleFilters={toggleFilters} handleFilterInput={handleFilterInput}/>}
      <SearchBox label={"Search"} searchTerm={searchTerm} handleInput={handleInput} />
      <img className='nav__image' src={brewdogLogo} />
      <h2 className='nav__filters' onClick={toggleFilters}>Filters</h2>
    </nav>
  )
}

export default NavBar;