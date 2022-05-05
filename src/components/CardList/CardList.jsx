import React from 'react';
import "./CardList.scss";
import Card from "../Card/Card.jsx";
import {Link} from "react-router-dom";


const CardList = ({beersArr}) => {

  const CardJSX = beersArr.map(beer => { 
    return (
    <Link to ={`beers/${beer.id}`} key={beer.id} >
   <Card key={beer.id} image={beer.image_url} name={beer.name} description={beer.description} />
    </Link>)
  });

  return (
    <div className='card-list'>
      {CardJSX}
    </div>
  );
}

export default CardList;