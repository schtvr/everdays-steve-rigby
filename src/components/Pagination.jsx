import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { reset, nextPage, prevPage, choosePage } from '../services/apiService';

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const { sort, page } = useSelector(state => state.search)
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

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    // sets which page numbers we display
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
  };

  return (
    <div>
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination

