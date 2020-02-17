import React, { Component } from 'react';


import Home from './components/pages/Home';
import Footer from './components/include/Footer';

//import logo from './logo.svg';
//import './App.css';
//import './style.css';

class HomeApp extends Component {
  render() {
    return (
      <div>
        
        <Home />
        <Footer />
        </div> 
    );
  }
}

export default HomeApp;
