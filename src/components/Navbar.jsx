// Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(''); // Track the active section

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Select all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); // Set the active section ID
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect(); // Clean up the observer on unmount
  }, []);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); // Scroll to section
    setActiveLink(id); // Update active link on click
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top of the page
  };
  
  
  

  return (
    <nav className="navbar">
      <div className="square-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        {/* Your logo content */}
      </div>
      <div className="nav-links">
        <a
          href="#about"
          onClick={() => handleClick('about')}
          className={activeLink === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#work"
          onClick={() => handleClick('work')}
          className={activeLink === 'work' ? 'active' : ''}
        >
          Work
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
