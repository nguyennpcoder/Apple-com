import React from 'react';
import './SpecialSavings.css';

const SpecialSavings = () => {
  const savings = [
    {
      title: "CARRIER DEALS",
      description: "Apple. Your one-stop shop for incredible carrier deals.",
      details: "Get up to $1000 in credit on a new iPhone with AT&T, Boost Mobile, T-Mobile, or Verizon. Trade-in may be required.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-carriertrade-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1725466294938",
      dark: false,
    },
    {
      title: "EDUCATION",
      description: "Buy a new Mac or iPad with education savings.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202406?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1716334899885",
      dark: false,
    },
    {
      title: "BUSINESS",
      description: "From enterprise to small business, we’ll work with you.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-business-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1724096343921",
      dark: true,
    },
    {
      title: "GOVERNMENT",
      description: "Special pricing is available for state, local, and federal agencies.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259305816",
      dark: false,
    },
    {
      title: "VETERANS AND MILITARY",
      description: "Active and veteran members may be eligible for exclusive savings.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723659938034",
      dark: false,
    },
    {
      title: "CERTIFIED REFURBISHED",
      description: "Shop refurbished Apple products backed by a one‑year warranty.- (Opens in a new window)",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202408?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1721055057263",
      dark: false,
    },
  ];

  return (
    <div className="special-savings">
      <h2>Special savings. <span>iPhone carrier deals and exclusive savings for school, businesses, and more.</span></h2>
      <div className="savings-cards">
        {savings.map((item, index) => (
          <div key={index} className={`savings-card ${item.dark ? 'dark' : ''}`}>
            <img src={item.image} alt={item.title} className="savings-image" />
            <div className="savings-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.details && <p className="details">{item.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialSavings;