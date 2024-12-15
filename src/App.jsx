import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MultiLayerParallax from './components/MultiLayerParallax';
import About from './components/About';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import ContactUs from './components/ContactUs';
import Studies from './components/Studies';
import { StarsCanvas } from './components/canvas';
// import { About, MultiLayerParallax, Navbar, Overview, ContactUs, Navbar, Studies, StarsCanvas } from "./components";
import * as React from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import MultiLayerParallax from './components/MultiLayerParallax';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
  }, []);
  return (
    <Router>
      <React.Fragment>
        <Navbar />
          <MultiLayerParallax />
          <About/>
          <Overview />
          <Studies />
          <div className="contactstars">
          <ContactUs />
          <StarsCanvas/>
          </div>
      </React.Fragment>
    </Router>
  );
};

export default App;

