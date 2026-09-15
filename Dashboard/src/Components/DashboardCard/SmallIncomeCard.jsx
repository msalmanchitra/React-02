import React from 'react';
import { FaStore } from 'react-icons/fa';
import './SmallIncomeCard.css';

const SmallIncomeCard = ({ amount, label, variant = 'blue' }) => {
  return (
    <div className={`small-card ${variant === 'blue' ? 'blue-small-card' : 'light-small-card'}`}>
      <div className={`icon-box ${variant === 'light' ? 'yellow-icon' : ''}`}>
        <FaStore />
      </div>
      <div className="small-card-content">
        <h3>{amount}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SmallIncomeCard;