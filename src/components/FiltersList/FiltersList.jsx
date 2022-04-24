import React from 'react';
import {Link} from "react-router-dom";
import "./FiltersList.scss";

const FiltersList = ({toggleFilters}) => {
  return (
    <div className="filters-list">
      <div className="filters-list__content">
        <Link to="/filter/abv" className="filters-list__content__item" onClick={toggleFilters}>ABV value greater than 6%</Link>
        <Link to="/filter/year" className="filters-list__content__item" onClick={toggleFilters}>Was first brewed before 2010</Link>
        <Link to="/filter/ph" className="filters-list__content__item" onClick={toggleFilters}>pH lower than 4</Link>
        <Link to="/" className="filters-list__content__item" onClick={toggleFilters}>Home</Link>
      </div>
    </div>
  );
};

export default FiltersList;