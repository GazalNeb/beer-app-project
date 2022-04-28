import React from 'react';
import "./CardList.scss";
import Card from "../Card/Card.jsx";

const CardList = ({beersArr}) => {

  const CardJSX = beersArr.map(beer => {
    return <Card key={beer.id} image={beer.image_url} name={beer.name} description={beer.description} first_brewed={beer.first_brewed} abv={beer.abv} ph={beer.ph} />
  })

  return (
    <div className='card-list'>
      {CardJSX}
    </div>
  )
}

export default CardList;