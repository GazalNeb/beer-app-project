import React from "react";
import CardList from "../../components/CardList/CardList";

const FilterBeerTile = ({beersArr, filter}) => {
  
  const filteredBeers = beersArr.filter(beer => {
    return (beer.filter > 6);
  });

  return (
    <>
      <CardList beersArr={filteredBeers} />
    </>
  );
};

export default FilterBeerTile;