// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// src/main.jsx
import 'antd/dist/reset.css'; // Use this if you're using a newer version of antd

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);