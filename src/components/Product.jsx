// src/components/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { product } = useParams();
  return (
    <div>
      <h1>{product}</h1>
      <p>Details about {product}</p>
    </div>
  );
};

export default Product;