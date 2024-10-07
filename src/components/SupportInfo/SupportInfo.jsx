// src/components/SupportInfo.jsx
import React from 'react';
import './SupportInfo.css';

const SupportInfo = () => {
  return (
    <div className="support-info">
      <div className="support-item">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309_AV1?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1701194050273" alt="Specialist" className="support-icon" />
        <div>
          <p>Need shopping help?</p>
          <a href="#">Ask a Specialist</a>
        </div>
      </div>
      <div className="support-item">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6327b76828e161465927013929f5a7b2a23403ed796b48dd3cc53338ffb8a57c?placeholderIfAbsent=true&apiKey=c03e8cb03df640c0b4254bffa3dca2bb" alt="Store" className="support-icon" />
        <div>
          <p>Visit an Apple Store</p>
          <a href="#">Find one near you</a>
        </div>
      </div>
    </div>
  );
};

export default SupportInfo;
