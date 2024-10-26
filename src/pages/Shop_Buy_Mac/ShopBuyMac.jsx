import React, { useRef, useState } from 'react';
import './ShopBuyMac.css';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import macbookAir from '../Shop_Buy_Mac/img/mac-card-40-macbook-air-m2-m3-202402.jfif';
import macbookPro from '../Shop_Buy_Mac/img/mac-card-40-macbookpro-14-16-202310_GEO_US.jfif';
import iMac from '../Shop_Buy_Mac/img/mac-card-40-imac-24-202310.jfif';
import macMini from '../Shop_Buy_Mac/img/mac-card-40-mac-mini-202301.jfif';
import macStudio from '../Shop_Buy_Mac/img/mac-card-40-mac-studio-202306.jfif';
import studioDisplay from '../Shop_Buy_Mac/img/mac-card-40-studio-display-202203.jfif';
import macPro from '../Shop_Buy_Mac/img/mac-card-40-mac-pro-202306.jfif';
import proDisplayXDR from '../Shop_Buy_Mac/img/mac-card-40-mac-pro-display-202108.jfif';

function ShopBuyMac() {
    const scrollRef = useRef(null);
    const [showButtons, setShowButtons] = useState(false); // Define state
  
    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

  return (
    <div className="shop-buy-mac">
      <header className="header">
        <h1>Shop Mac</h1>
        <div className="support">
          <div className="support-item">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309_AV2?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1701194050335" alt="Support" />
            <div>
              <p>Need shopping help?</p>
              <a href="#ask-specialist">Ask a Mac Specialist</a>
            </div>
          </div>
          <div className="support-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6327b76828e161465927013929f5a7b2a23403ed796b48dd3cc53338ffb8a57c?placeholderIfAbsent=true&apiKey=c03e8cb03df640c0b4254bffa3dca2bb" alt="Apple Store" />
            <div>
              <p>Visit an Apple Store</p>
              <a href="#find-store">Find one near you</a>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar">
        <a href="#all-models">All Models</a>
        <a href="#guides">Shopping guides</a>
        <a href="#savings">Ways to Save</a>
        <a href="#accessories">Accessories</a>
        <a href="#setup-support">Setup and Support</a>
        <a href="#experience">The Mac Experience</a>
        <a href="#stores">Special Stores</a>
      </nav>
      <section className="product-section">
        <h2 className="product-title">All models. <span>Take your pick.</span></h2>
        <div className="product-carousel" onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
            {showButtons && (
                <Button className="scroll-button" icon={<LeftOutlined />} onClick={scrollLeft} />
            )}
          <div className="product-cards" ref={scrollRef}>
            <div className="product-card">
              <h3>MacBook Air with M2 or M3 chip</h3>
              <img src={macbookAir} alt="MacBook Air" />
              <div className="description">
              <p>From $999 or $83.25/mo. for 12 mo.*</p>
              <button>Buy</button>
              </div>
            </div>
            <div className="product-card">
              <h3>MacBook Pro</h3>
              <img src={macbookPro} alt="MacBook Pro" />
              <div className="description">
              <p>From $1599 or $133.25/mo. for 12 mo.*</p>
              <button>Buy</button>
              </div>
            </div>
            <div className="product-card">
              <h3>iMac</h3>
              <img src={iMac} alt="iMac" />
              <div className="description">
              <p>From $1299 or $108.25/mo. for 12 mo.*</p>
              <button>Buy</button>
              </div>
            </div>
            <div className="product-card">
                <h3>Mac mini</h3>
                <img src={macMini} alt="Mac mini" />
                <div className="description">
                    <p>From $599 or $49.91/mo. for 12 mo.*</p>
                    <button>Buy</button>
                </div>
                </div>
            <div className="product-card">
              <h3>Mac Studio</h3>
              <img src={macStudio} alt="Mac Studio" />
              <div className="description">
              <p>From $1999 or $166.58/mo. for 12 mo.*</p>
              <button>Buy</button>
              </div>
            </div>
            <div className="product-card">
              <h3>Studio Display</h3>
              <img src={studioDisplay} alt="Studio Display" />
              <div className="description">
              <p>From $1599 or $133.25/mo. for 12 mo.*</p>
              <button>Buy</button>
              </div>
            </div>
            <div className="product-card">
              <h3>Mac Pro</h3>
              <img src={macPro} alt="Mac Pro" />
              <div className="description">
              <p>From $6999 or $583.25/mo. for 12 mo.*</p>
              <button>Buy</button>
              </div>
            </div>
            <div className="product-card">
              <h3>Pro Display XDR</h3>
              <img src={proDisplayXDR} alt="Pro Display XDR" />
              <div className="description">
              <p>From $4999 or $416.58/mo. for 12 mo.*</p>
              <button>Buy</button>
              </div>
            </div>
          </div>
          {showButtons && (
            <Button className="scroll-button" icon={<RightOutlined />} onClick={scrollRight} />
        )}
        </div>
      </section>
    </div>
  );
}

export default ShopBuyMac;
