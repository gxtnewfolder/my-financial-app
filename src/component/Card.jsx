// Card.jsx

import React from 'react';

function Card({ title, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
      <div className="text-4xl mb-2">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">Click to View as Each Month</p>
    </div>
  );
}

export default Card;