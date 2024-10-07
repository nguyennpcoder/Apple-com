// src/components/CategoryList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css'; // Assuming you have a CSS file for custom styles

const categories = [
  { name: 'Mac', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666', link: '/mac' },
  { name: 'iPhone', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1723857157128', link: '/iphone' },
  { name: 'iPad', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875', link: '/ipad' },
  { name: 'Apple Watch', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838', link: '/watch' },
  { name: 'Apple Vision Pro', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269', link: '/vision' },
  { name: 'AirPods', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822', link: '/airpods' },
  { name: 'AirTag', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000', link: '/airtag' },
  { name: 'Apple TV 4K', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484', link: '/tv' },
  { name: 'HomePod', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654', link: '/homepod' },
  { name: 'Accessories', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174', link: '/accessories' },
  { name: 'Apple Gift Card', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054', link: '/giftcard' },
];

const CategoryList = () => {
  return (
    
    <div className="category-list">
      
      {categories.map((category) => (
        <div key={category.name} className="category-item">
          <Link to={category.link}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;