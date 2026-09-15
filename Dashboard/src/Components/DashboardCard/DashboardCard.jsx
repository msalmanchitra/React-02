import React from 'react';
import TotalEarningCard from './TotalEarningCard';
import TotalOrderCard from './TotalOrderCard';
import SmallIncomeCard from './SmallIncomeCard';
import './DashboardCard.css';

const DashboardCard = () => {
  return (
    <div className="cards-container">
      <TotalEarningCard />
      <TotalOrderCard />
      <div className="small-cards-column">
        <SmallIncomeCard amount="$203k" label="Total Income" variant="blue" />
        <SmallIncomeCard amount="$203k" label="Total Income" variant="light" />
      </div>
    </div>
  );
};

export default DashboardCard;