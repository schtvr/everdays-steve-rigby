import React from "react";
import StarRatings from 'react-star-ratings'

const HomeResults = ({ home }) => {
  const { name, address, ratingsInfo } = home;
  const { street, city, state, zip } = address;
  let avgRating = ratingsInfo.combinedAvg;
  if (avgRating === undefined) {
    avgRating = ratingsInfo.average
    console.log(avgRating)
  }
  return (
    <div className="card results__card">
      <img src="/PlaceholderImage.png" className="card-img-top searh-results__image" alt={name}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {street} {city}, {state} {zip}
        </p>
          <StarRatings
            rating={(avgRating * 5)}
            name='rating'
            starDimension="2rem"
            starSpacing="1rem"
          />
      </div>
    </div>
  );
};

export default HomeResults;
