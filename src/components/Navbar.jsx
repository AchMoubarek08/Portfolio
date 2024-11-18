// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="square-logo">
      </div>
      <div className="nav-links">
        <Link to="#about">About</Link>
        <Link to="#work">Work</Link>
      </div>
    </nav>
  );
};

export default Navbar;
