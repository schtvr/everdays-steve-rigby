import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateSort } from "../services/apiService";

const SortDropDown = () => {
  const dispatch = useAppDispatch();
  const [currentSort, setCurrentSort] = useState('Top Rated')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, sortName: string) => {
    const sortSelection = e.target as HTMLButtonElement;
    setCurrentSort(sortName)
    dispatch(updateSort(sortSelection.value))
  }

  return (
    <div className="dropdown">
      Sort by: {' '}
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {currentSort}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <button className="dropdown-item" value="R" onClick={(e) => handleClick(e, 'Top Rated')}>
            Top Rated
          </button>
        </li>
        <li>
        <button className="dropdown-item" value="A" onClick={(e) => handleClick(e, 'A-Z')}>
            A-Z
          </button>
        </li>
        <li>
        <button className="dropdown-item" value="Z" onClick={(e) => handleClick(e, 'Z-A')}>
            Z-A
          </button>
        </li>
      </ul>
    </div>

  );
};

export default SortDropDown;
