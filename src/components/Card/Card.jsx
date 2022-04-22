import React from 'react';
import "./Card.scss";


const Card = ({image, description}) => {
  return (
    <div className='card'>
     <img className='card__image'src={image}/>
     <p className='card__description'>{description}</p>
    </div>
  )
}

export default Card;