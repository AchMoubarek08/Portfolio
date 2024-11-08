import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import Overview from './components/Overview';
import ContactUs from './components/ContactUs';
// import ContactUs from './components/ContactUs'; // Import the new component
// import NewComponent from './NewComponent';

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <AppHeader />
      <About />
      <Overview />
      <ContactUs />
      <AppFooter />
    </AppContainer>
    
  );
};

export default App;

