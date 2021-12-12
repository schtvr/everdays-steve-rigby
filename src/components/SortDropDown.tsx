import React from "react";

const SortDropDown = () => {
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
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
