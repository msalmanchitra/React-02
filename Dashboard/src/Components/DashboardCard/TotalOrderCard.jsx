import React, { useState } from 'react';
import { FaShoppingBag, FaArrowDown } from 'react-icons/fa';
import './TotalOrderCard.css';

const TotalOrderCard = () => {
  const [timeframe, setTimeframe] = useState('year');

  return (
    <div className="card blue-card">
      <div className="card-header">
        <div className="icon-box">
          <FaShoppingBag />
        </div>
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${timeframe === 'month' ? 'active' : ''}`}
            onClick={() => setTimeframe('month')}
          >
            Month
          </button>
          <button 
            className={`toggle-btn ${timeframe === 'year' ? 'active' : ''}`}
            onClick={() => setTimeframe('year')}
          >
            Year
          </button>
        </div>
      </div>

      <div className="card-body-row">
        <div className="card-body">
          <div className="amount-group">
            <h2 className="amount">$961</h2>
            <span className="badge badge-down">
              <FaArrowDown />
            </span>
          </div>
          <p className="card-label">Total Order</p>
        </div>
        
        <div className="sparkline">
          <svg viewBox="0 0 100 40" preserveAspectRatio="none">
            <path 
              d="M 0 30 Q 15 20, 25 25 T 50 35 T 75 10 T 100 5" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="3" 
              strokeLinecap="round" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TotalOrderCard;