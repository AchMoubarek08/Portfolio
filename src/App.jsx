import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import Abouut from './components/Abouut';
import About from './components/About';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import ContactUs from './components/ContactUs'; // Import the new component
// import NewComponent from './NewComponent';

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <AppHeader />
      <Abouut />
      <About />
      <ContactUs />
      <AppFooter />
    </AppContainer>
    
  );
};

export default App;

