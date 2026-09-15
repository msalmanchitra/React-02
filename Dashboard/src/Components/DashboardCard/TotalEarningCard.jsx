import React from 'react';
import { FaWallet, FaEllipsisH, FaExternalLinkAlt } from 'react-icons/fa';
import './TotalEarningCard.css';

const TotalEarningCard = () => {
  return (
    <div className="card purple-card">
      <div className="card-header">
        <div className="icon-box">
          <FaWallet />
        </div>
        <button className="more-btn">
          <FaEllipsisH />
        </button>
      </div>
      <div className="card-body">
        <div className="amount-group">
          <h2 className="amount">$500.00</h2>
          <span className="badge badge-up">
            <FaExternalLinkAlt />
          </span>
        </div>
        <p className="card-label">Total Earning</p>
      </div>
    </div>
  );
};

export default TotalEarningCard;