import React, { useState, useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './AudioProducts.css';

const AudioProducts = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const cardWidth = 285; // Adjust this value to match the card width + margin

  const products = [
    {
      title: "Get 3 months of Apple Music free.",
      description: "Included with the purchase of select Apple devices.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applemusic-202301?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1670389217380",
    },
    {
      title: "AirPods Pro 2",
      price: "$249.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724041669458",
      label: "Free Engraving",
    },
    {
      title: "AirPods 4 with Active Noise Cancellation",
      price: "$179.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1725502639798",
      label: "Free Engraving",
    },
    {
      title: "AirPods Max - Midnight",
      price: "$549.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724927451276",
      label: "Free Engraving",
      colors: ["#666666", "#996699", "black", "#FFCCCC", "#FF9966"],
    },
    {
      title: "HomePod - Midnight",
      price: "$299.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1670557210097",
      colors: ["black", "#BBBBBB"],
    },
    {
      title: "Beats Pill — Wireless Bluetooth® Speaker",
      price: "$149.99",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MW463?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1716251412721",
      label: "New",
      colors: ["black", "#CC3300", "#996666"],
    },
    {
      title: "HomePod mini - Yellow",
      price: "$99.00",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632925510000",
      colors: ["#336699", "#FFCC66", "#444444", "#888888", "#FF6666"],
    },
    {
      title: "Beats Solo 4 — On-Ear Wireless Headphones – Cloud Pink",
      price: "$199.99",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUW33?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1712255584823",
      label: "New",
      colors: ["black", "#336699", "#FFCCFF"],
    },
  ];

  const scrollLeft = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (index < products.length - 5) {
      setIndex((prevIndex) => prevIndex + 1);
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="audio-products-container">
      <h2>Loud and clear. <span>Unparalleled choices for rich, high-quality sound.</span></h2>
      <div className="audio-products-wrapper" ref={scrollRef}>
        {products.map((product, idx) => (
          <div className="audio-product-card" key={idx}>
            {product.label && <span className="product-label">{product.label}</span>}
            <img src={product.image} alt={product.title} className="audio-product-image" />
            <h3 className="audio-product-title">{product.title}</h3>
            {product.description && <p>{product.description}</p>}
            {product.price && <p className="price">{product.price}</p>}
            {product.colors && (
              <div className="color-options">
                {product.colors.map((color, colorIdx) => (
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
      {index < products.length - 5 && (
        <button className="scroll-button right" onClick={scrollRight}>
          <RightOutlined />
        </button>
      )}
    </div>
  );
};

export default AudioProducts;