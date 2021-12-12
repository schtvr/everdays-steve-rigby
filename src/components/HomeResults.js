import React from 'react'

const HomeResults = ({home}) => {
  console.log(home)
  const { name, address, ratingsInfo } = home;
  const { street, city, state, zip } = address;
  const avgRating = ratingsInfo.combinedAvg;
  return (
    <div>
      {name}, {street} {city}, {state} {zip} {avgRating}
    </div>
  )
}

export default HomeResults
