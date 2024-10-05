// src/components/Home.jsx
import React from 'react';
import CategoryList from './CategoryList';
import SupportInfo from './SupportInfo';
import LatestProducts from './LatestProducts';
import './Home.css';
import HelpProduct from './HelpProduct';
import AppleStoreDifference from './AppleStoreDifference';
import Accessories from './Accessories';
import AudioProducts from './AudioProducts';
import AppleExperience from './AppleExperience';
import SpecialSavings from './SpecialSavings';
import QuickLinks from './QuickLinks';
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Store.</h1>
        <p>The best way to buy the products you love.</p>
      </div>
      <CategoryList />
      <SupportInfo />
      <LatestProducts />
      <HelpProduct />
      <AppleStoreDifference />
      <Accessories />
      <AudioProducts />
      <AppleExperience />
      <SpecialSavings />
      <QuickLinks />
    </div>
  );
};

export default Home;