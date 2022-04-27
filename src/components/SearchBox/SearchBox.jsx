import React from "react";
import "./SearchBox.scss";

const SearchBox = props => {
  const {label, searchTerm, handleSearchInput} = props;

  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label>
      <input type="text" name={label} value={searchTerm} onInput={handleSearchInput} className="search-box__input"/>
    </form>
  );
};

export default SearchBox;