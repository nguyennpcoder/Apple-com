
import React, { useState }  from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppleFilled, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import './Header.css'; // Assuming you have a CSS file for custom styles

const Header = () => {
  const [isMacMenuVisible, setMacMenuVisible] = useState(false);
  const [isIpMenuVisible, setIpMenuVisible] = useState(false);
  const [isIpadMenuVisible, setIpadMenuVisible] = useState(false);
  return (
    <div className="header-container">
      <Menu mode="horizontal" className="header-menu">
        <Menu.Item key="logo" className="header-logo">
          <Link to="/">
            <AppleFilled style={{ fontSize: '24px' }} />
          </Link>
        </Menu.Item>
        <Menu.Item key="store">
          <Link to="/">Store</Link>
        </Menu.Item>
       

        <Menu.Item
          key="mac"
          className="dropdown"
          onMouseEnter={() => setMacMenuVisible(true)}
          onMouseLeave={() => setMacMenuVisible(false)}
        >
          <Link to="/mac">Mac</Link>
          <div className={`mac-links-containerr ${isMacMenuVisible ? 'show' : ''}`}>
            <div className="mac-links-columnn">
              <h2>Explore Mac</h2>
              <ul>
                <li><span className="highlight11">Explore All Mac</span></li>
                <li><span className="highlight11">MacBook Air</span></li>
                <li><span className="highlight11">MacBook Pro</span></li>
                <li><span className="highlight11">iMac</span></li>
                <li><span className="highlight11">Mac mini</span></li>
                <li><span className="highlight11">Mac Studio</span></li>
                <li><span className="highlight11">Mac Pro</span></li>
                <li><span className="highlight11">Displays</span></li>
                <li><span className="highlightt">Compare Mac</span></li>
                <li><span className="highlightt">Mac Does That</span></li>
              </ul>
            </div>
            <div className="mac-links-columnn">
              <h2>Shop Mac</h2>
              <ul>
                <li><span className="highlightt">Shop Mac</span></li>
                <li><span className="highlightt">Mac Accessories</span></li>
                <li><span className="highlightt">Apple Trade In</span></li>
                <li><span className="highlightt">Financing</span></li>
              </ul>
            </div>
            <div className="mac-links-columnn">
              <h2>More from Mac</h2>
              <ul>
                <li><span className="highlightt">Mac Support</span></li>
                <li><span className="highlightt">AppleCare+ for Mac</span></li>
                <li><span className="highlightt">macOS Sequoia</span></li>
                <li><span className="highlightt">Apple Intelligence</span></li>
                <li><span className="highlightt">Apps by Apple</span></li>
                <li><span className="highlightt">Continuity</span></li>
                <li><span className="highlightt">iCloud+</span></li>
                <li><span className="highlightt">Mac for Business</span></li>
                <li><span className="highlightt">Education</span></li>
              </ul>
            </div>
          </div>
        </Menu.Item>

        <Menu.Item key="ipad"
         className="dropdown"
         onMouseEnter={() => setIpadMenuVisible(true)}
         onMouseLeave={() => setIpadMenuVisible(false)}>
          <Link to="/ipad">iPad</Link>
          <div className={`ipad-links-containerr ${isIpadMenuVisible ? 'show' : ''}`}>
  <div className="ipad-links-columnn">
      <h2>Explore iPad</h2>
      <ul>
        <li><span className="highlight1111">Explore All iPad</span></li>
        <li><span className="highlight1111">iPad Pro</span></li>
        <li><span className="highlight1111">iPad Air</span></li>
        <li><span className="highlight1111">iPad</span></li>
        <li><span className="highlight1111">iPad mini</span></li>
        <li><span className="highlight1111">Apple Pencil</span></li>
        <li><span className="highlight1111">Keyboards</span></li>
      
        <li><span className="highlightttt">Compare iPhad</span></li>
        <li><span className="highlightttt">Why iPad</span></li>
      </ul>
    </div>
    <div className="ipad-links-columnn">
      <h2>Shop iPad</h2>
      <ul>
        <li><span className="highlightttt">Shop iPad</span></li>
        <li><span className="highlightttt">iPad Accessories</span></li>
        <li><span className="highlightttt">Apple Trade In</span></li>
        <li><span className="highlightttt">Financing</span></li>
      </ul>
    </div>
    <div className="ipad-links-columnn">
      <h2>More from iPad</h2>
      <ul>
        <li><span className="highlightttt">iPad Support</span></li>
        <li><span className="highlightttt">AppleCare+ for iPad</span></li>
        <li><span className="highlightttt">iPadOS 18</span></li>
        <li><span className="highlightttt">Apple Intelligence</span></li>
        <li><span className="highlightttt">Apps by Apple</span></li>
      
        <li><span className="highlightttt">iCloud+</span></li>
        <li><span className="highlightttt">Education</span></li>
        
      </ul>
    </div>
  </div>
        </Menu.Item>
        <Menu.Item key="iphone"
         className="dropdown"
         onMouseEnter={() => setIpMenuVisible(true)}
         onMouseLeave={() => setIpMenuVisible(false)}>
          <Link to="/iphone">iPhone</Link>
          <div className={`ip-links-containerr ${isIpMenuVisible ? 'show' : ''}`}>
  <div className="ip-links-columnn">
      <h2>Explore iPhone</h2>
      <ul>
        <li><span className="highlight111">Explore All iPhone</span></li>
        <li><span className="highlight111">iPhone 16 Pro</span></li>
        <li><span className="highlight111">iPhone 16</span></li>
        <li><span className="highlight111">iPhone 15</span></li>
        <li><span className="highlight111">iPhone 14</span></li>
        <li><span className="highlight111">iPhone SE</span></li>
      
        <li><span className="highlighttt">Compare iPhone</span></li>
        <li><span className="highlighttt">Switch from Android</span></li>
      </ul>
    </div>
    <div className="ip-links-columnn">
      <h2>Shop iPhone</h2>
      <ul>
        <li><span className="highlighttt">Shop iPhone</span></li>
        <li><span className="highlighttt">iPhone Accessories</span></li>
        <li><span className="highlighttt">Apple Trade In</span></li>
        <li><span className="highlighttt">Financing</span></li>
      </ul>
    </div>
    <div className="ip-links-columnn">
      <h2>More from iPhone</h2>
      <ul>
        <li><span className="highlighttt">iPhone Support</span></li>
        <li><span className="highlighttt">AppleCare+ for iPhone</span></li>
        <li><span className="highlighttt">iOS 18</span></li>
        <li><span className="highlighttt">Apple Intelligence</span></li>
        <li><span className="highlighttt">Apps by Apple</span></li>
        <li><span className="highlighttt">iPhone Privacy</span></li>
        <li><span className="highlighttt">iCloud+</span></li>
        <li><span className="highlighttt">Wallet, Pay, Card</span></li>
        <li><span className="highlighttt">Siri</span></li>
      </ul>
    </div>
  </div>
        </Menu.Item>
        <Menu.Item key="watch">
          <Link to="/watch">Watch</Link>
        </Menu.Item>
        <Menu.Item key="vision">
          <Link to="/vision">Vision</Link>
        </Menu.Item>
        <Menu.Item key="airpods">
          <Link to="/airpods">AirPods</Link>
        </Menu.Item>
        <Menu.Item key="tv">
          <Link to="/tv">TV & Home</Link>
        </Menu.Item>
        <Menu.Item key="entertainment">
          <Link to="/entertainment">Entertainment</Link>
        </Menu.Item>
        <Menu.Item key="accessories">
          <Link to="/accessories">Accessories</Link>
        </Menu.Item>
        <Menu.Item key="support">
          <Link to="/support">Support</Link>
        </Menu.Item>
        <Menu.Item key="search" className="header-icon">
          <SearchOutlined style={{ fontSize: '20px' }} />
        </Menu.Item>
        <Menu.Item key="cart" className="header-icon">
          <ShoppingOutlined  style={{ fontSize: '20px' }} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;