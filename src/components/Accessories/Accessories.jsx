import React, { useState, useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Accessories.css';

const Accessories = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const cardWidth = 285; // Adjust this value to match the card width + margin

  const scrollLeft = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (index < accessories.length - 7) {
      setIndex((prevIndex) => prevIndex + 1);
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const accessories = [
    {
      title: "In with the new.",
      description: "Your favorite accessories. Now available in bold new colors and with innovative new features.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723822259651",
    },
    {
      title: "iPhone 16 Pro Clear Case with MagSafe",
      price: "$49.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723930332796",
    },
    {
      title: "46mm Plum Sport Loop",
      price: "$49.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXL63?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724186591572",
      colors: ["#666699", "#669933","#a3a3a3", "#333300", "#CC0099"],
    },
    {
      title: "49mm Black Titanium Milanese Loop",
      price: "$199.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXKF3ref?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723919328571",
      colors: ["black", "#a3a3a3"],
    },
    {
      title: "iPhone 16 Silicone Case with MagSafe",
      price: "$49.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY63?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723236736369",
      colors: ["#CC9900", "#000080", "#336633", "#CC6699", "#a3a3a3", "#996600"],
    },
    {
      title: "iPhone FineWoven Wallet with MagSafe",
      price: "$59.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA6X4?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723573541193",
      colors: ["#003366", "#003333", "#333333","#993366"],
    },
    {
      title: "MagSafe Charger (1 m)",
      price: "$39.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX6X3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724257154789",
    },
    {
      title: "AirTag FineWoven Key Ring",
      price: "$35.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7L4?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723856728705",
      colors: ["#003366", "#003333", "#333333", "#CC6600","#663366"],
    },
    {
      title: "Apple Pencil Pro",
      price: "$129.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1713841707336",
    },
    {
      title: "Explore all accessories.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-explore-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1724087949039",
    },
  ];

  return (
    <div className="accessories-container">
      <h2>Accessories. <span>Essentials that pair perfectly with your favorite devices.</span> </h2>
      <div className="accessories-wrapper" ref={scrollRef}>
        {accessories.map((item, idx) => (
          <div className="accessory-card" key={idx}>
            {idx !== 0 && idx !== accessories.length - 1 && <span className="new-label">New</span>}
            <img src={item.image} alt={item.title} className="accessory-image" />
            <h3 className="accessory-title">{item.title}</h3>
            {item.description && <p>{item.description}</p>}
            {item.price && <p className="price">{item.price}</p>}
            {item.colors && (
              <div className="color-options">
                {item.colors.map((color, colorIdx) => (
                  <span key={colorIdx} className="color-dot" style={{ backgroundColor: color }}></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {index > 0 && (
        <button className="scroll-button left" onClick={scrollLeft}>
          <LeftOutlined />
        </button>
      )}
      {index < accessories.length - 7 && (
        <button className="scroll-button right" onClick={scrollRight}>
          <RightOutlined />
        </button>
      )}
    </div>
  );
};

export default Accessories;