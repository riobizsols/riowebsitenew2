import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ title, description, icon, link, cta = 'Learn More' }) => {
  return (
    <div className="product-card">
      <div className="product-card-icon">
        {icon}
      </div>
      <h3 className="product-card-title">{title}</h3>
      <p className="product-card-description">{description}</p>
      <Link to={link} className="product-card-cta">
        {cta} →
      </Link>
    </div>
  );
};

export default ProductCard;
