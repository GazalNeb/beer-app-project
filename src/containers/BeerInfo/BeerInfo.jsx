import React from 'react';
import "./BeerInfo.scss";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const BeerInfo = ({beersArr}) => {
  const {beerId} = useParams();
  console.log(beerId);

  const checkBeer = beersArr.filter(beer => {
    return (beer.id == beerId);
  })[0];
  console.log(checkBeer);

  const foodPairingsJSX = checkBeer.food_pairing.map(foodItem => {
   return <li>{foodItem}</li>;
  });

  return (
    <article className="beer-info">
    <div className="beer-info__banner">
      <img className="beer-info__img" src={checkBeer.image_url} alt="beer image"/>
    </div>
    <div className="beer-info__general">
      <h2 className="beer-info__name">{checkBeer.name}</h2>
      <h3 className="beer-info__tagline">{checkBeer.tagline}</h3>
      <p className="beer-info__description">{checkBeer.description}</p>
      <h2 className="beer-info__heading">Goes well with</h2>
      <ul className="beer-info__food-pairings">
        {foodPairingsJSX}
      </ul>
    </div>
    <div className="album-info__brewers">
     <h2 className='beer-info__year'>{checkBeer.first_brewed}</h2>
     <h2 className='beer-info__abv'>Abv value: {checkBeer.abv}</h2>
     <h2 className='beer-info__ph'>pH value: {checkBeer.ph}</h2>
     <h2 className='beer-info__tips'>Brewer's tips: {checkBeer.brewers_tips}</h2>
     <Link to="/">
       <button>Back</button>
     </Link>
    </div>
  </article>
  );
}

export default BeerInfo;