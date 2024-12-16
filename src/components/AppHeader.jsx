import React, { useState, useEffect } from 'react';
import ButtonUsage from './ButtonUsage';
import Loader from './Loader';
import TypingText from './TypingText';
import { color } from 'framer-motion';
import AnimateSection from './AnimateSection';

const AppHeader = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-card">
      {isLoading && <Loader />}  {/* Show loader while loading */}
      <AnimateSection
        initialOpacity={0}
        initialY={500}         
        finalOpacity={1}        
        finalY={0}              
        duration={0.5}         
        threshold={0.3}         
        triggerOnce={true}
        customStyle={{
          display: "flex",         // Add display flex
          alignItems: "center",    // Center content vertically
          justifyContent: "center" // Center content horizontally
        }}
      >
      <div className={`hero ${isLoading ? 'hidden' : ''}`}>
        <div className="box box1">
          <h1 className="hero-name" style={{textAlign:"start"}}>Hi, I'm Achraf</h1>
          <h3 className="hero-desc" >Full-stack developper, i develop user interfaces, web apps and more..</h3>
          <ButtonUsage>

          </ButtonUsage>
        </div>
        <div className="box box2">
          <img src="../bg.jpg" className="circle-image" />
        </div>
      </div>
      </AnimateSection>
    </section>
  );
};

export default AppHeader;