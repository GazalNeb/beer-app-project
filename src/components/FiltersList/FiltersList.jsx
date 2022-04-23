import React from 'react';
import "./FiltersList.scss";

const FiltersList = () => {
  return (
    <div className="filters-list">
      <div className="filters-list__content">
        <h2 className="filters-list__content__item">ABV value greater than 6%</h2>
        <h2 className="filters-list__content__item">Was first brewed before 2010</h2>
        <h2 className="filters-list__content__item">pH lower than 4</h2>
      </div>
    </div>
  );
};

export default FiltersList;