import React, { useState } from 'react';
import "./NavBar.scss";
import brewdogLogo from "../../assets/images/brewdog-logo.png";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const NavBar = ({searchTerm, handleSearchInput, handleFilterInput}) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <nav className="nav">
      {showFilters && <FiltersList toggleFilters={toggleFilters} handleFilterInput={handleFilterInput}/>}
      <SearchBox label={"Search"} searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
      <img className='nav__image' src={brewdogLogo} />
      <h2 className='nav__filters' onClick={toggleFilters}>Filters</h2>
    </nav>
  )
}

export default NavBar;