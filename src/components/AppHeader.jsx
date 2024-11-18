import React, { useState, useEffect } from 'react';
import ButtonUsage from './ButtonUsage';
import Loader from './Loader';  // Import your loader component
import TypingText from './TypingText';

const AppHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  // State for loader

  useEffect(() => {
    // Set a delay before showing the header with animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);  // Hide loader when done
    }, 700); // 500ms delay, adjust as needed

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  return (
    <div className="hero-card">
      {isLoading && <Loader />}  {/* Show loader while loading */}
      <div className={`hero ${isLoading ? 'hidden' : ''}`}>
        <div className="box box1">
          <h1 className="hero-name" style={{textAlign:"center"}}>Hi, I'm Achraf</h1>
          <TypingText className="hero-desc" text="I  develop user interfaces, web applications and more..." />
          <ButtonUsage />
        </div>
        <div className="box box2">
          <img src="../bg.jpg" className="circle-image" />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;