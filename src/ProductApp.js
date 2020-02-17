import React, { Component } from 'react';


import Product from './components/Product';
import Footer from './components/Footer';
//import logo from './logo.svg';
//import './App.css';
//import './style.css';

class ProductApp extends Component {
  
  render() {
   
    return (
      <div>
       
        <Product />
        <Footer />
        </div> 
    );
  }
}

export default ProductApp;
