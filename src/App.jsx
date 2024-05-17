import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from './component/Card'; // Import your card component
// import GeneralJournal from './pages/GeneralJournal'; // Create these page components
// import GeneralLedger from './pages/GeneralLedger'; 

function App() {
  const cards = [
    { title: 'General Journal', icon: '📄', path: '/general-journal' },
    { title: 'General Ledger', icon: '📒', path: '/general-ledger' },
    { title: 'Montly income statement', icon: '📄', path: '/monthly-income-statement' },
    { title: 'Inventory stock card', icon: '📒', path: '/inventory-stock-card' },
    { title: 'Purchasing Order', icon: '📄', path: '/purchasing-order' },
    { title: 'Invoice', icon: '📒', path: '/invoice'},
    // ... other card data
  ];

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">INC372 - Financial Report</h1>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <Link to={card.path} key={index}> {/* Use Link for navigation */}
              <Card title={card.title} icon={card.icon} />
            </Link>
          ))}
        </div>
        <Routes>
          {/* <Route path="/general-journal" element={<GeneralJournal />} /> */}
          {/* <Route path="/general-ledger" element={<GeneralLedger />} /> */}
          {/* Add other routes here */}
        </Routes>
        
      </div>
  );
}

export default App;

