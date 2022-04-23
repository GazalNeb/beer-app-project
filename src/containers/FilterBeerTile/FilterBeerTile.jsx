import React from "react";
import CardList from "../../components/CardList/CardList";

const FilterBeerTile = ({ beersArr, filter }) => {

  let filteredBeers; 

  if (filter == "abv") {
      filteredBeers = beersArr.filter((beer) => {
      return beer.abv > 6;
    });

  } else if (filter == "2010") {
      filteredBeers = beersArr.filter((beer) => {
      const brewedYear = beer.first_brewed.substring(3);
      return brewedYear < 2010;
    });

  } else if (filter == "ph") {
      filteredBeers = beersArr.filter((beer) => {
      return beer.ph < 4;
    });
  }

  else {
    return;
  }

  const CardJSX = <CardList beersArr={filteredBeers} /> 

  return (
    <>
      {CardJSX}
    </>
  );
};

export default FilterBeerTile;
