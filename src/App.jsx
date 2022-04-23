import React, { useState } from 'react';
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import beers from "./data/beers";
import SearchBeerTile from './containers/SearchBeerTile/SearchBeerTile';

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  };

  return (
    <>
    <NavBar searchTerm={searchTerm} handleInput={handleInput}/>
    <SearchBeerTile beersArr={beers} searchTerm={searchTerm}/>
    </>
  )
}

export default App;