// Loader.js
import React from 'react';
import ButtonUsage from './ButtonUsage';

const Loader = () => {
  return (
    <div className="hero">
        <div className="box box1">
          <h1 className="hero-name">Loading.......</h1>
          <h3 className="hero-desc"></h3>
        </div>
    <div className="box box2">
      <div className="circle-image" style={{backgroundImage:"none"}}/>
    </div>
  </div>
  );
};

export default Loader;