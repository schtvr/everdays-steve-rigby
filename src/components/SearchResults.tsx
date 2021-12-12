import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeResults from './HomeResults';

const Results = () => {
  const [error, setError] = useState(false);
  const [homes, setHomes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('http://dev.everdays.com/v2/public/providers?state=mi')
      .then(res => res.json())
      .then(
        ({ data }) => {
          setIsLoaded(true);
          setHomes(data.homes);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log({error})
        })
  }, [])
  if (error) return <div>Error</div>;
  if (!isLoaded) return <div>Loading...</div>
  if (homes.length < 1) return <div>Empty list</div>
  return (
    <div>
      {
        homes.map((home) => <HomeResults home={home} />)
      }
    </div>
  )

}

export default Results