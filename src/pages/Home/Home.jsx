// src/components/Home.jsx
import React, { useEffect } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import SupportInfo from '../../components/SupportInfo/SupportInfo';
import LatestProducts from '../../components/LatestProducts/LatestProducts';
import './Home.css';
import HelpProduct from '../../components/HelpProduct/HelpProduct';
import AppleStoreDifference from '../../components/AppleStoreDifference/AppleStoreDifference';
import Accessories from '../../components/Accessories/Accessories';
import AudioProducts from '../../components/AudioProducts/AudioProducts';
import AppleExperience from '../../components/AppleExperience/AppleExperience';
import SpecialSavings from '../../components/SpecialSavings/SpecialSavings';
import QuickLinks from '../../components/QuickLinks/QuickLinks';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 300) { // Trigger slightly earlier
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Store.</h1>
        <p>The best way to buy the products you love.</p>
      </div>

      <CategoryList />
      <SupportInfo />
      <LatestProducts />

      <div className="fade-in"><HelpProduct /></div>
      <div className="fade-in"><AppleStoreDifference /></div>
      <div className="fade-in"><Accessories /></div>
      <div className="fade-in"><AudioProducts /></div>
      <div className="fade-in"><AppleExperience /></div>
      <div className="fade-in"><SpecialSavings /></div>
      <div className="fade-in"><QuickLinks /></div>
    </div>
  );
};

export default Home;