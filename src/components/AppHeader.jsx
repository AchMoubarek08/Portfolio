import React, { useState, useEffect } from 'react';
import ButtonUsage from './ButtonUsage';
import Loader from './Loader';  // Import your loader component

const AppHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  // State for loader

  useEffect(() => {
    // Set a delay before showing the header with animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);  // Hide loader when done
    }, 1200); // 500ms delay, adjust as needed

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  return (
    <header className={`section app-header ${isVisible ? 'fade-in' : ''}`}>
      {isLoading && <Loader />}  {/* Show loader while loading */}
      <div className={`hero animate-section ${isLoading ? 'hidden' : ''}`}>
        <div className="box box1">
          <h1 className="hero-name" style={{textAlign:"center"}}>Hi, I'm Achraf</h1>
          <h3 className="hero-desc">I develop user interfaces, web applications, and more</h3>
          <ButtonUsage />
        </div>
        <div className="box box2">
          <img src="../bg.jpg" className="circle-image" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;