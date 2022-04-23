import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import beers from "./data/beers";
import SearchBeerTile from "./containers/SearchBeerTile/SearchBeerTile";
import FilterBeerTile from "./containers/FilterBeerTile/FilterBeerTile";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  };

  return (
    <Router>
      <>
        <NavBar searchTerm={searchTerm} handleInput={handleInput} />
        <Routes>
          <Route path="/filter/abv" element={<FilterBeerTile beersArr={beers} />} />
          <Route path="/" element={<SearchBeerTile beersArr={beers} searchTerm={searchTerm} />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
