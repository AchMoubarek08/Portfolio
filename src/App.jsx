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
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';


const App = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <AppContainer>
      <Navbar />
      <AppHeader />
      <About />
      <Overview />
      <Studies />
      <ContactUs />
      <AppFooter />
    </AppContainer>
  </React.Fragment>
    
  );
};

export default App;

