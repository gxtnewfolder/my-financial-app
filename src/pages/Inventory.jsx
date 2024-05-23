import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchInventoryStockCard } from '../component/mockAPI'; // Replace with your actual API call

function InventoryStockCard() {
  const [stockData, setStockData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('March'); // For month selection
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInventoryStockCard();
        setStockData(data);
      } catch (error) {
        console.error('Error fetching inventory stock data:', error);
      }
    };
    fetchData();
  }, []);

  const handleGoBack = () => {
    navigate('/finance');
  };

  return (
    <div className="container mx-auto p-4">
      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 px-4 rounded mb-4"
      >
        Back
      </button>
      {/* Month Selection Dropdown */}
      <select 
        value={selectedMonth} 
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mx-6"
      >
        {/* Populate with month options (e.g., January, February, etc.) */}
        <option value="">Select Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        {/* Add more months as needed */}
      </select>
      <h2 className="text-2xl font-semibold text-center mb-4">Inventory Stock Card</h2>
      <p className="text-center text-gray-500 mb-4">March 2022</p> {/* Assuming you have the month data */}

      {stockData ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PATROL TYPE</th>
              <th className="px-6 py-3 bg-teal-100 text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-l-lg">GASOHOL 95</th>
              <th className="px-6 py-3 bg-teal-100 text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-r-lg">DIESEL</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(stockData).map((key) => (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{key}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-gray-700">{stockData[key].GASOHOL95}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-gray-700">{stockData[key].DIESEL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading inventory stock data...</p>
      )}
    </div>
  );
}

export default InventoryStockCard;