import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <header id="header">
      <nav id="header__main-nav">
        <div className="header__main-nav--hamburger">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <ul className="header__main-nav--links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Budget App</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
