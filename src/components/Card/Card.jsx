import React from 'react';
import "./Card.scss";


const Card = ({image, name, description, first_brewed, abv, ph}) => {
  return (
    <div className='card'>
     <img className='card__image'src={image}/>
     <h2 className='card__name'>{name}</h2>
     <p className='card__description'>{description}</p>
     <div className="card__brewers">
       <p className='card__brewers__year'><i>Year it was first brewed: {first_brewed}</i></p>
       <p className='card__brewers__abv'><i>Abv value: {abv}</i></p>
       <p className='card__brewers__ph'><i>pH value: {ph}</i></p>
     </div>
    </div>
  )
}

export default Card;