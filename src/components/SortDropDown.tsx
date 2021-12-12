import React from "react";
import { useAppDispatch } from "../app/hooks";
import { updateSort } from "../services/apiService";

const SortDropDown = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sortSelection = e.target as HTMLButtonElement;
    dispatch(updateSort(sortSelection.value))
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort results
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <button className="dropdown-item" value="R" onClick={(e) => handleClick(e)}>
            Top Rated
          </button>
        </li>
        <li>
        <button className="dropdown-item" value="A" onClick={(e) => handleClick(e)}>
            A-Z
          </button>
        </li>
        <li>
        <button className="dropdown-item" value="Z" onClick={(e) => handleClick(e)}>
            Z-A
          </button>
        </li>
      </ul>
    </div>

    //     <div className="dropdown">
    //   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
    //     Dropdown button
    //   </button>
    //   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //     <a className="dropdown-item" href="search&sort=R">Top Rated</a>
    //     <a className="dropdown-item" href="search&sort=A">A-Z</a>
    //     <a className="dropdown-item" href="search&sort=Z">Z-A</a>
    //   </div>
    // </div>
  );
};

export default SortDropDown;
