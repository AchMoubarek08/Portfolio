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
          <Navbar />
          <MultiLayerParallax />
          <About />
          <SectionDivider />
          <Overview />
          <SectionDivider />
          <Studies />
          <SectionDivider />
          <div className="contactstars">
            <ContactUs />
            <StarsCanvas />
          </div>

    </Router>
  );
};

export default App;
