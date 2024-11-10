import React from 'react';
// import CtaButton from './CtaButton';
import ButtonUsage from './ButtonUsage';

// import bgjpg from '../bg.jpg';
// import { i } from 'framer-motion/client';
// import './App.css';
const AppHeader = () => {
  return (
    <header className="section app-header">
    <div class="hero">
      <div class="box box1">
        <h1 className="hero-name">Hi, I'm Achraf</h1>
        <h3 className="hero-desc">I devolop user interfaces, web applications and more</h3>
        <ButtonUsage></ButtonUsage>
      </div>
      <div class="box box2">
        <img src="../bg.jpg" className="circle-image" />
      </div>
    </div>
    </header>
  );
};

export default AppHeader;

