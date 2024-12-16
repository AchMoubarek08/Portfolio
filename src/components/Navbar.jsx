// Navbar.js
import { WbIncandescentTwoTone } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Track the active section
  const[lastSection, setLastSection] = useState(false);

  useEffect(() => {
    // Intersection Observer for active link detection
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.9 }
    );

    sections.forEach((section) => observer.observe(section));

    // Scroll listener for navbar transparency
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 370 && window.scrollY < 3100);
      setLastSection(window.scrollY > 3100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect(); // Clean up Intersection Observer
      window.removeEventListener('scroll', handleScroll); // Clean up scroll listener
    };
  }, []);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveLink(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'shrink' : ''}`}
    >
    <div
      className="square-logo"
      onClick={scrollToTop}
      style={{ cursor: 'pointer'}}
    >
      {/* Your logo content */}
    </div>
    <div className={`nav-links ${lastSection ? 'last' : ''}`}>
      <a
        href="#about"
        onClick={() => handleClick('about')}
        className={activeLink === 'about' ? 'active' : ''}
      >
        About
      </a>
      <a
        href="#studies"
        onClick={() => handleClick('studies')}
        className={activeLink === 'studies' ? 'active' : ''}
      >
        Studies
      </a>
    </div>
  </nav>
);
};

export default Navbar;
