import React, { useState } from 'react';
import "./NavBar.scss";
import brewdogLogo from "../../assets/images/brewdog-logo.png";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const NavBar = ({searchTerm, handleSearchInput, handleFilterInput, searchResultCount}) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <nav className="nav">
      {showFilters && <FiltersList toggleFilters={toggleFilters} handleFilterInput={handleFilterInput}/>}
      <img className='nav__image' src={brewdogLogo} />
      <SearchBox label={"Search"} searchTerm={searchTerm} handleSearchInput={handleSearchInput} /> 
      <h2 className='nav__filters' onClick={toggleFilters}>Filters</h2> 
    </nav>
  )
}

export default NavBar;