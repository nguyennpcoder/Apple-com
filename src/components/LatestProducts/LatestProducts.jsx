
import React, { useState, useRef } from 'react'; // Add useRef here
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import './LatestProducts.css';

// ... existing code ...
const products = [
  {
    name: 'iPhone 16 Pro',
    description: 'Hello, Apple Intelligence.',
    price: 'From $999 or $41.62/mo. for 24 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-16-pro-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1726165763260',
  },
  {
    name: 'Apple Watch Series 10',
    description: 'Thinstant classic.',
    price: 'From $399 or $33.25/mo. for 12 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1724095131742',
    isBlackText: true,
  },
  {
    name: 'iPhone 16',
    description: 'Hello, Apple Intelligence.',
    price: 'From $799 or $33.29/mo. for 24 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1725661572513',
  },
  {
    name: 'Apple Watch Ultra 2',
    description: 'New finish. Never quit.',
    price: 'From $799 or $66.58/mo. for 12 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1725655432734',
  },
  {
    name: 'AirPods 4',
    description: 'Iconic. Now supersonic.',
    price: 'Starting at $129 with Active Noise Cancellation $179',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1722974321259',
    isBlackText: true,
  },
  // Thêm dữ liệu mới ở đây
  {
    name: 'AirPods Pro 2',
    description: 'With an all-in-one hearing health experience coming soon.',
    price: '$249 or $41.50/mo. for 6 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1722974321259',
    
  },
  {
    name: 'AirPods Max',
    description: 'Five fresh colors. Bold sound.',
    price: '$549 or $91.50/mo. for 6 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-max-202409?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1722974321259',
    isBlackText: true,
  },
  {
    name: 'Apple Vision Pro',
    description: 'Welcome to spatial computing.',
    price: 'From $3499 or $291.58/mo. for 12 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-vision-pro-202401?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1705097770616',
    isBlackText: true,
  },
  {
    name: 'MacBook Air',
    description: 'Designed to go places.',
    price: 'From $999 or $83.25/mo. for 12 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595',
    isBlackText: true,
  },
  {
    name: 'iPad Air',
    description: 'Fresh Air.',
    price: 'From $599 or $49.91/mo. for 12 mo.*',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1713308272877',
    isBlackText: true,
  },
  {
    name: 'Macbook Pro',
    description: 'Mind-blowing.',
    description: 'Head-turning.',
    price: 'From $1599 or $133.25/mo.per month for 12 mo.monthsFootnote†',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696964122967',
    isBlackText: true,
  },
  {
    name: 'iPad Pro',
    description: 'Thinpossible.',
    price: 'From $999 or $83.25/mo.per month for 12 mo.monthsFootnote†',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816',
  },
];
const LatestProducts = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const cardWidth = 285; // Adjust this value to match the card width + margin

  const handleNext = () => {
    if (index < products.length - 6) {
      setIndex((prevIndex) => prevIndex + 1);
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="latest-products">
      <h2>
        The latest. <span>Take a look at what’s new, right now.</span>
      </h2>
      <div className="slider-container" ref={scrollRef}>
        {index > 0 && (
          <button className="scroll-button left" onClick={handlePrev}>
            <LeftOutlined />
          </button>
        )}
        <div className="product-cards">
          {products.slice(index, index + 6).map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className={`product-info ${product.isBlackText ? 'black-text' : ''}`}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {index < products.length - 6 && (
          <button className="scroll-button right" onClick={handleNext}>
            <RightOutlined />
          </button>
        )}
      </div>
    </div>
  );
};

export default LatestProducts;