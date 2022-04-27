import React from "react";
import CardList from "../../components/CardList/CardList";
import "./SearchBeerTile.scss";

const SearchBeerTile = ({beersArr, searchTerm}) => {
  
  const filteredBeers = beersArr.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm);
  });


  return (
    <>
      <p className="search-message">You see {filteredBeers.length} types of beer</p>
      <CardList beersArr={filteredBeers} />
    </>
  );
};

export default SearchBeerTile;