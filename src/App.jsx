import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import beers from "./data/beers";
import SearchBeerTile from "./containers/SearchBeerTile/SearchBeerTile";
import FilterBeerTile from "./containers/FilterBeerTile/FilterBeerTile";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersArr, setBeersArr] = useState([]);
  const [Filters, setFilters] = useState({abv6:false, year2010:false, ph4: false});

  const handleInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  };

  const handleFilterInput = (event) => {
    console.log("in handleFilterInput");
    console.log(event);
    if (event.target.defaultValue == "abv") {
      setFilters({abv6:true, year2010:false, ph4: false});
    } else if (event.target.defaultValue == "year2010") {
      setFilters({abv6:false, year2010:true, ph4: false});
    } else if (event.target.defaultValue == "none") {
      setFilters({abv6:false, year2010:false, ph4: false});
    }
    else {
      return;
    }
    console.log(Filters);
  };

  const areObjectsEqual = (object1, object2) => {
   return (object1.abv6 == object2.abv6 && object2.year2010 == object2.year2010 && object1.ph4 == object2.ph4);
  }

  useEffect (() => {
    console.log("in useEffect");
    console.log(Filters, "in");
   let url;
   if (areObjectsEqual(Filters, {abv6:false, year2010:false, ph4: false})) {
     url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
   }

   else if (areObjectsEqual(Filters, {abv6:true, year2010:false, ph4: false})) {
     url = "https://api.punkapi.com/v2/beers?abv_gt=6"
   }

   else if (areObjectsEqual(Filters, {abv6:false, year2010:true, ph4: false})) {
    url = "https://api.punkapi.com/v2/beers?brewed_before=01-2010"
   }
   console.log(url);
   console.log(Filters, "out");
  fetch(url)
        .then(response => response.json())
        .then(beerObjects => {
            console.log( beerObjects );
            setBeersArr( beerObjects );
        })
        .catch(console.log("API request failed"))

  }, [Filters] );

  console.log("after fetch");



  return (
      <>
       <NavBar searchTerm={searchTerm} handleInput={handleInput} handleFilterInput={handleFilterInput} />
       <SearchBeerTile beersArr={beersArr} searchTerm={searchTerm} />
      </>
  );
};

export default App;
