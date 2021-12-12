import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Results: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const [homes, setHomes] = useState({});
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    console.log('ping')
    fetch('http://dev.everdays.com/v2/public/providers?state=mi')
      .then(res => res.json())
      .then(
        ({ data }) => {
          setIsLoaded(true);
          console.log(data.homes);
      },
        (error) => {
          setIsLoaded(true);
          setHasError(error);
          console.log({error})
        })
  }, [])
  return <></>
}

export default Results