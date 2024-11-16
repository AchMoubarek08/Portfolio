import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import Overview from './components/Overview';
import ContactUs from './components/ContactUs';
import Studies from './components/Studies';
import Section from './components/Section';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <AppContainer>
          <Navbar />
          <AppHeader />
          <Routes>
            <Route path="#about" element={<About />} />
          </Routes>
          <About/>
          <Overview />
          <Studies />
          <ContactUs />
          <AppFooter />
        </AppContainer>
      </React.Fragment>
    </Router>
  );
};

export default App;

