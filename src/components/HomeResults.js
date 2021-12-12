import React from "react";

const HomeResults = ({ home }) => {
  const { name, address, ratingsInfo } = home;
  const { street, city, state, zip } = address;
  const avgRating = ratingsInfo.combinedAvg;
  return (
    <div className="card results__card">
      <img src="/PlaceholderImage.png" className="card-img-top searh-results__image" alt={name}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {street} {city}, {state} {zip}
        </p>
          <div>{avgRating}</div>
      </div>
    </div>
  );
};

export default HomeResults;
