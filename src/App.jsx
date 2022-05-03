import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import beers from "./data/beers";
import SearchBeerTile from "./containers/SearchBeerTile/SearchBeerTile";
import BeerInfo from "./containers/BeerInfo/BeerInfo";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersArr, setBeersArr] = useState([]);
  const [Filters, setFilters] = useState({abv6:false, year2010:false, ph4: false});

  const handleSearchInput = (event) => {
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
    } else if (event.target.defaultValue == "ph4") {
      setFilters({abv6:false, year2010:false, ph4: true});
    } else if (event.target.defaultValue == "none") {
      setFilters({abv6:false, year2010:false, ph4: false});
    }
    else {
      return;
    }
    console.log(Filters);
  };

  const areObjectsEqual = (object1, object2) => {
    if (object1.abv6 === object2.abv6 && object1.year2010 === object2.year2010 && object1.ph4 === object2.ph4) {
      return true;
    }
    return false;
  }

  useEffect (() => {
    console.log("in useEffect");
    console.log(Filters, "in");
   let url;
   if (areObjectsEqual(Filters, {abv6:false, year2010:false, ph4: false})) {
     url = "https://api.punkapi.com/v2/beers?per_page=80";
   }

   else if (areObjectsEqual(Filters, {abv6:true, year2010:false, ph4: false})) {
     url = "https://api.punkapi.com/v2/beers?abv_gt=6"
   }

   else if (areObjectsEqual(Filters, {abv6:false, year2010:true, ph4: false})) {
    url = "https://api.punkapi.com/v2/beers?brewed_before=01-2010"
   }

   else if (areObjectsEqual(Filters, {abv6:false, year2010:false, ph4: true})) {
    url = "https://api.punkapi.com/v2/beers?per_page=80";
   }
   console.log(url);
   console.log(Filters, "out");
  fetch(url)
        .then(response => response.json())
        .then(beerObjects => {
            console.log( beerObjects, "beerObjects" );
            if (areObjectsEqual(Filters, {abv6:false, year2010:false, ph4: true})) {
              const filteredByPh4BeersArr = beerObjects.filter(beerObject => {
                return (beerObject.ph < 4);
              })
              console.log(filteredByPh4BeersArr, "filteredByPh4");
              setBeersArr(filteredByPh4BeersArr);
            }
            else {
              setBeersArr( beerObjects );
            }
        })
        .catch(e => {
          console.log("in catch");
          console.log(e);
        })

  }, [Filters] );

  console.log("after fetch");
  console.log(beersArr, " beersArr");

  return (
      <Router>
        <div className="">
        <NavBar searchTerm={searchTerm} handleSearchInput={handleSearchInput} handleFilterInput={handleFilterInput} />
        <SearchBeerTile beersArr={beersArr} searchTerm={searchTerm} />
       <Routes>
        <Route exact path="/" element={<SearchBeerTile beersArr={beersArr} searchTerm={searchTerm} />}></Route>
        <Route exact path="/beers/:beerId" element={<BeerInfo beersArr={beersArr}/>}></Route>
       </Routes>
       </div>
      </Router>
  );
};

export default App;
