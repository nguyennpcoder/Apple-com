// src/components/HelpProduct.jsx
import React from 'react';
import './HelpProduct.css';

const HelpProduct = () => {
  const helpItems = [
    {
      title: 'APPLE SPECIALIST',
      description: 'Shop one on one with a Specialist. Online or in a store.',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821',
    },
    {
      title: 'Shop with a Specialist over',
      description: 'Choose your next device in a guided, one-way video session.',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202409?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1725047826258',
    },
    {
      title: 'TODAY AT APPLE',
      description: 'Join free sessions at your Apple Store.- (Opens in a new window). Learn about the latest features and how to go further with your Apple devices.',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145',
    },
    
    {
      title: 'Get to know your new device with Personal Setup.',
      description: 'Let us guide you through setup, data transfer, and the latest features in an online session.',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-setup-beyond-202409_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=95&.v=1726515153184',
    },
    {
      title: 'Get expert service and support at the Genius Bar.',
      description: '',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375544000',
    },
  ];

  return (
    <div className="help-product">
      <h2>
       Help is here. <span>Whenever and however you need it.</span>
      </h2>
      <div className="help-cards">
        {helpItems.map((item, index) => (
          <div key={index} className="help-card">
            <img src={item.image} alt={item.title} className="help-image" />
            <div className="help-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpProduct;