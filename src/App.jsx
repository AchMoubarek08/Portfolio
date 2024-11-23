import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppContainer from './components/AppContainer';
import MultiLayerParallax from './components/MultiLayerParallax';
import About from './components/About';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import Overview from './components/Overview';
import ContactUs from './components/ContactUs';
import Studies from './components/Studies';
import Section from './components/Section';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import MultiLayerParallax from './components/MultiLayerParallax';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
          <MultiLayerParallax />
          <About/>
          <Overview />
          <Studies />
          <ContactUs />
          <AppFooter />
      </React.Fragment>
    </Router>
  );
};

export default App;

