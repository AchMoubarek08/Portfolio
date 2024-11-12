// Loader.js
import React from 'react';
import ButtonUsage from './ButtonUsage';

const Loader = () => {
  return (
    <div className="hero">
        <div className="box box1">
        <div className="text-loader">
            <h1 className="hero-name" style={{color:"wheat"}}>................</h1>
            <h3 className="hero-desc" style={{color:"wheat"}}>......................................</h3>
        </div>
        </div>
    <div className="box box2">
      <div className="circle-image" style={{backgroundImage:"none"}}/>
    </div>
  </div>
  );
};

export default Loader;