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

  const handleInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  };

  useEffect (() => {
    console.log("in useEffect");

  fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(beerObjects => {
            console.log( beerObjects );
            setBeersArr( beerObjects );
        })

  }, [] );

  console.log("after fetch");

  return (
    <Router>
      <>
        <NavBar searchTerm={searchTerm} handleInput={handleInput} />
        <Routes>
          <Route path="/filter/abv" element={<FilterBeerTile beersArr={beersArr} filter={"abv"}/>} />
          <Route path="/filter/year" element={<FilterBeerTile beersArr={beersArr} filter={"2010"}/>} />
          <Route path="/filter/ph" element={<FilterBeerTile beersArr={beersArr} filter={"ph"}/>} />
          <Route path="/" element={<SearchBeerTile beersArr={beersArr} searchTerm={searchTerm} />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
