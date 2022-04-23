import React from "react";
import CardList from "../../components/CardList/CardList";

const SearchBeerTile = ({beersArr, searchTerm}) => {
  
  const filteredBeers = beersArr.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm);
  });

  return (
    <>
      <CardList beersArr={filteredBeers} />
    </>
  );
};

export default SearchBeerTile;