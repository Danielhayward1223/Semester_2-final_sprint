import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-button">
        Shamazon.com
      </Link>
      <div className="search-bar">
        <div className="search-dropdown">
          <p>All</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
          >
            <path
              d="M2.4375 0L0 1.90909L6.5 7L13 1.90909L10.5625 0L6.5 3.18182L2.4375 0Z"
              fill="#424242"
            />
          </svg>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Nav;
