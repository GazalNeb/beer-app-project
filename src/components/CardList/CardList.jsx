import React from 'react';
import "./CardList.scss";
import Card from "../Card/Card.jsx";
import beers from "../../data/beers";

const CardList = () => {

  const CardJSX = beers.map(beer => {
    return <Card key={beer.id} image={beer.image_url} description={beer.description} />
  })

  return (
    <div className='card-list'>
      {CardJSX}
    </div>
  )
}

export default CardList;