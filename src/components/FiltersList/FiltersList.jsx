import React from 'react';
import {Link} from "react-router-dom";
import "./FiltersList.scss";

const FiltersList = () => {
  return (
    <div className="filters-list">
      <div className="filters-list__content">
        <Link to="/filter/abv" className="filters-list__content__item">ABV value greater than 6%</Link>
        <Link to="/filter/year" className="filters-list__content__item">Was first brewed before 2010</Link>
        <Link to="/filter/pH" className="filters-list__content__item">pH lower than 4</Link>
        <Link to="/" className="filters-list__content__item">Home</Link>
      </div>
    </div>
  );
};

export default FiltersList;