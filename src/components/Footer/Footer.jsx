// src/components/Footer.jsx
import React from 'react';
import { AppleFilled, RightOutlined } from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <AppleFilled style={{ fontSize: '18px', marginRight: '8px', marginBottom: '2px' }} />
        <RightOutlined style={{ fontSize: '16px', marginRight: '8px' }} />
        <span>Apple Store Online</span>
      </div>
      <div className="footer-links">
        <div>
          <h4>Shop and Learn</h4>
          <ul>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Vision</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>AirTag</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <h4>Account</h4>
          <ul>
            <li>Manage Your Apple Account</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
          <h4>Apple Wallet</h4>
          <ul>
            <li>Wallet</li>
            <li>Apple Card</li>
            <li>Apple Pay</li>
            <li>Apple Cash</li>
          </ul>
        </div>
        <div>
          <h4>Apple Store</h4>
          <ul>
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Today at Apple</li>
            <li>Apple Camp</li>
            <li>Apple Store App</li>
            <li>Certified Refurbished</li>
            <li>Apple Trade In</li>
            <li>Financing</li>
            <li>Carrier Deals at Apple</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
        </div>
        <div>
          <h4>For Business</h4>
          <ul>
            <li>Apple and Business</li>
            <li>Shop for Business</li>
          </ul>
          <h4>For Education</h4>
          <ul>
            <li>Apple and Education</li>
            <li>Shop for K-12</li>
            <li>Shop for College</li>
          </ul>
          <h4>For Healthcare</h4>
          <ul>
            <li>Apple in Healthcare</li>
            <li>Health on Apple Watch</li>
            <li>Health Records on iPhone</li>
          </ul>
          <h4>For Government</h4>
          <ul>
            <li>Shop for Government</li>
            <li>Shop for Veterans and Military</li>
          </ul>
        </div>
        <div>
          <h4>Apple Values</h4>
          <ul>
            <li>Accessibility</li>
            <li>Education</li>
            <li>Environment</li>
            <li>Inclusion and Diversity</li>
            <li>Privacy</li>
            <li>Racial Equity and Justice</li>
            <li>Supply Chain</li>
          </ul>
          <h4>About Apple</h4>
          <ul>
            <li>Newsroom</li>
            <li>Apple Leadership</li>
            <li>Career Opportunities</li>
            <li>Investors</li>
            <li>Ethics & Compliance</li>
            <li>Events</li>
            <li>Contact Apple</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
        <p>© 2024 Apple Inc. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Sales and Refunds</a> | <a href="#">Legal</a> | <a href="#">Site Map</a></p>
        <p>United States</p>
      </div>
    </footer>
  );
};

export default Footer;