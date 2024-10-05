// src/components/Header.jsx
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppleFilled, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import './Header.css'; // Assuming you have a CSS file for custom styles

const Header = () => {
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
        <Menu.Item key="mac">
          <Link to="/mac">Mac</Link>
        </Menu.Item>
        <Menu.Item key="ipad">
          <Link to="/ipad">iPad</Link>
        </Menu.Item>
        <Menu.Item key="iphone">
          <Link to="/iphone">iPhone</Link>
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