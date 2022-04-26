import React from 'react';
import "./Card.scss";

const Card = ({image, name, description}) => {
  return (
    <div className='card'>
     <img className='card__image'src={image}/>
     <h2 className='card__name'>{name}</h2>
     <p className='card__description'>{description}</p>
    </div>
  )
}

export default Card;