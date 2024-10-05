// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Mac from './components/Mac';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} /> 
        <Route path="/:product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;