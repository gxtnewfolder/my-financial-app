import React, { useState, useEffect } from 'react';

function InventoryStockCard() {
  const [stockData, setStockData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/inventory-stock-card/${selectedItem}`);
        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error('Error fetching inventory stock card data:', error);
        // Handle the error (e.g., show error message)
      }
    };

    if (selectedItem) {
      fetchData();
    }
  }, [selectedItem]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Inventory Stock Card</h2>

      {/* Item Selection Dropdown */}
      <select 
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
      >
        {/* Populate with item options from your inventory */}

        <option value="">Select an item</option>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </select>

      {/* Stock Card Table (if data is loaded) */}
      {stockData.length > 0 && (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stockData.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InventoryStockCard;
