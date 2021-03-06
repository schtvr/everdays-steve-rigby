import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { nextPage, prevPage, choosePage } from '../services/apiService';

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    dispatch(nextPage())
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    dispatch(prevPage())
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    dispatch(choosePage(pageNumber))
  }

  const getPaginationGroup = () => {
    // sets which page numbers we display
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
  };

  return (
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
        >
          {'<'}
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`pagination-item ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`pagination-item ${currentPage === pages ? 'disabled' : ''}`}
        >
          {'>'}
        </button>
      </div>
  );
}

export default Pagination


