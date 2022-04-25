import React from 'react';
import {Link} from "react-router-dom";
import "./FiltersList.scss";

const FiltersList = ({toggleFilters, handleFilterInput}) => {

  return (
    <div className="filters-list">
      <div className="filters-list__content">
        <label htmlFor="filters-list_abv6" className="filters-list__content__item" onClick={toggleFilters}>ABV value greater than 6%</label>
        <input type="checkbox" id="filters-list_abv6" onInput={handleFilterInput} value="abv"></input>
        <label htmlFor="filters-list_year2010" className="filters-list__content__item" onClick={toggleFilters}>Was first brewed before 2010</label>
        <input type="checkbox" id="filters-list_year2010" onInput={handleFilterInput} value="year2010"></input>
        <label htmlFor="filters-list_ph4" className="filters-list__content__item" onClick={toggleFilters}>pH lower than 4</label>
        <input type="checkbox" id="filters-list_ph4" onInput={handleFilterInput} value="ph4"></input>
        <label htmlFor="filters-list_all" className="filters-list__content__item" onClick={toggleFilters}>All beers</label>
        <input type="checkbox" id="filters-list_all" onInput={handleFilterInput} value="none"></input>
      </div>
    </div>
  );
};

export default FiltersList;