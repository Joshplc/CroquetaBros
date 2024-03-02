// Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="cover.svg" alt="Coffee Restaurant Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
