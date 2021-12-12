import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeResults from './HomeResults';
import Pagination from './Pagination';
import { useSelector } from 'react-redux'
import { useAppSelector } from '../app/hooks';

const Results = () => {
  const [error, setError] = useState(false);
  const [homes, setHomes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const search = useAppSelector((state) => state.search)

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

  useEffect(() => {
    const { sort, page } = search
    fetch(`http://dev.everdays.com/v2/public/providers?state=mi&sort=${sort}&page=${page}`)
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
  }, [search])


  if (error) return <div>Error</div>;
  if (!isLoaded) return <div>Loading...</div>
  if (homes.length < 1) return <div>Empty list</div>
  return (
    <div>
      { homes.map((home, i) => <HomeResults home={home} key={i}/>) }

      <Pagination
        data={homes}
        pageLimit={5}
        dataLimit={20}
      />

    </div>
  )

}

export default Results