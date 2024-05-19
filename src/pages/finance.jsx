import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from '../component/Card';
import Sidebar from '../component/Sidebar'; // Import your sidebar component

function Finance() {
  const cards = [
    { title: 'General Journal', icon: '📄', text: 'Click to View at Each Day', path: '/general-journal' },
    { title: 'General Ledger', icon: '📒', text: 'Click to View at Each Account', path: '/general-ledger' },
    { title: 'Montly income statement', icon: '📄', text: 'Click to View at Each Month', path: '/monthly-income-statement' },
    { title: 'Inventory stock card', icon: '📒', text: 'Click to View at Each Month', path: '/inventory-stock-card' },
    { title: 'Purchasing Order', icon: '📄', text: 'Click to View More', path: '/purchasing-order' },
    { title: 'Invoice', icon: '📒', text: 'Click to View More', path: '/invoice'},
    // ... other card data
  ];

  return (
    
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">INC372 - Financial Report</h1>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <Link to={card.path} key={index}> {/* Use Link for navigation */}
              <Card title={card.title} icon={card.icon} text={card.text} />
            </Link>
          ))}
        </div>  
      </div>
    </div>
  );
}

export default Finance;

