import React from 'react';
import "./FiltersList.scss";

const FiltersList = ({toggleFilters, handleFilterInput}) => {

  return (
    <div className="filters-list">
      <div className="filters-list__content">
        <label htmlFor="filters-list_abv6" className="filters-list__content__item">ABV value greater than 6%
          <input type="checkbox" id="filters-list_abv6" onInput={handleFilterInput} value="abv" className="filters-list__content__input" />
        </label>
        <label htmlFor="filters-list_year2010" className="filters-list__content__item">Was first brewed before 2010
          <input type="checkbox" id="filters-list_year2010" onInput={handleFilterInput} value="year2010" className="filters-list__content__input" />
        </label>
        <label htmlFor="filters-list_ph4" className="filters-list__content__item">pH lower than 4
           <input type="checkbox" id="filters-list_ph4" onInput={handleFilterInput} value="ph4" className="filters-list__content__input" />
        </label>
        <label htmlFor="filters-list_all" className="filters-list__content__item">All beers
          <input type="checkbox" id="filters-list_all" onInput={handleFilterInput} value="none" className="filters-list__content__input" />
        </label>
        <button onClick={toggleFilters}>Save</button>
      </div>
    </div>
  );
};

export default FiltersList;