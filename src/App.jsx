import './App.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MultiLayerParallax from './components/MultiLayerParallax';
import About from './components/About';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import ContactUs from './components/ContactUs';
import Studies from './components/Studies';
import SectionDivider from './components/SectionDivider';
import { StarsCanvas } from './components/canvas';

const App = () => {
  return (
    <Router>
      <div className="snap-container">
        <section className="snap-section">
          <Navbar />
          <MultiLayerParallax />
        </section>
        
        <section className="snap-section">
          <About />
          <SectionDivider />
        </section>
        
        <section className="snap-section">
          <Overview />
          <SectionDivider />
        </section>
        
        <section className="snap-section">
          <Studies />
          <SectionDivider />
        </section>
        
        <section className="snap-section">
          <div className="contactstars">
            <ContactUs />
            <StarsCanvas />
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
