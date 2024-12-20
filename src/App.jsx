import './App.scss';
import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import MultiLayerParallax from './components/MultiLayerParallax';
import About from './components/About';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import ContactUs from './components/ContactUs';
import Studies from './components/Studies';
import { StarsCanvas } from './components/canvas';

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <MultiLayerParallax />
          <About />
          <Overview />
          {/* Section divider between Overview and Studies */}
          <Studies />
        <div className="contactstars">
            <ContactUs />
          <StarsCanvas />
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
