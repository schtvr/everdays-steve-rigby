import React from "react";

const NavBar = () => {
  // some combo of useState and useEffect to track the scrollY value
  // when scrollY < 15, add 'bg-transparent'

  return (
    <nav className="navbar navbar-expand-md bg-light fixed-top">
      <div className="container">

          <img src="/LogoDesktop.png" alt="Everdays" height="24" />
      </div>
    </nav>
  );
};

export default NavBar;
