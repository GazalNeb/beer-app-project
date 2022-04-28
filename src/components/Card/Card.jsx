import React from 'react';
import "./Card.scss";


const Card = ({image, name, description, first_brewed, abv, ph}) => {
  return (
    <div className='card'>
     <img className='card__image'src={image}/>
     <h2 className='card__name'>{name}</h2>
     <p className='card__description'>{description}</p>
     <div className="card__brewers">
       <p className='card__brewers__year'>Year it was first brewed: {first_brewed}</p>
       <p className='card__brewers__abv'>Abv value: {abv}</p>
       <p className='card__brewers__ph'>pH value: {ph}</p>
     </div>
    </div>
  )
}

export default Card;