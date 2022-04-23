import React from "react";
import CardList from "../../components/CardList/CardList";

const FilterBeerTile = ({beersArr}) => {
  
  const filteredBeers = beersArr.filter(beer => {
    return (beer.abv > 6);
  });

  return (
    <>
      <CardList beersArr={filteredBeers} />
    </>
  );
};

export default FilterBeerTile;