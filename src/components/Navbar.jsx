// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="square-logo">
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
      </div>
    </nav>
  );
};

export default Navbar;
