// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './components/Product';
import Mac from './pages/Mac/Mac';
import Iphone from './pages/Iphone/Iphone';
import Ipad from './pages/Ipad/Ipad';
import Watch from './pages/Watch/Watch';
const App = () => {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} /> 
        <Route path="/iphone" element={<Iphone />} /> 
        <Route path="/ipad" element={<Ipad />} /> 
        <Route path="/watch" element={<Watch />} />
        <Route path="/:product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;