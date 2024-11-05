import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import Abouut from './components/Abouut';
import About from './components/About';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
// import NewComponent from './NewComponent';

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <AppHeader />
      <Abouut />
      <About />
      <AppFooter />
    </AppContainer>
    
  );
};

export default App;

