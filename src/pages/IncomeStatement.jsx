import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getIncomeStatementData } from "../component/mockAPI"; // Make sure to adjust this import path

function MonthlyIncomeStatement() {
  const [incomeStatementData, setIncomeStatementData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(""); // For month selection
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIncomeStatementData(selectedMonth); // Get data from mock API or your backend
        setIncomeStatementData(data);
      } catch (error) {
        console.error("Error fetching income statement data:", error);
        // Handle the error gracefully (e.g., show an error message)
      }
    };
    
      fetchData();
  }, [selectedMonth]); // Fetch data whenever selectedMonth changes

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
        {/* Add more months as needed */}
      </select>
      <h1 className="text-3xl font-bold mb-6">MONTHLY INCOME STATEMENT</h1>
      {incomeStatementData ? (
        <div>
          {/* Sales Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">SALE</h2>
            {incomeStatementData.sales.map((sale) => (
              <div key={sale.item} className="flex justify-between">
                <span className="px-6">{sale.item}</span>
                <span className="text-right">{sale.amount}</span>
              </div>
            ))}
            <div className="flex justify-between mt-2">
              <span className="font-semibold">TOTAL SALE</span>
              <span className="text-right font-semibold">
                {incomeStatementData.totalSales}
              </span>
            </div>
          </div>

          {/* Cost of Goods Sold Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">COST OF GOODS SOLD</h2>
            {incomeStatementData.costOfGoodsSold.map((cost) => (
              <div key={cost.item} className="flex justify-between">
                <span className="px-6">{cost.item}</span>
                <span className="text-right">{cost.amount}</span>
              </div>
            ))}
            <div className="flex justify-between mt-2">
              <span className="font-semibold">TOTAL COST OF GOODS SOLD</span>
              <span className="text-right font-semibold">
                {incomeStatementData.totalCostOfGoodsSold}
              </span>
            </div>
          </div>
          {/* ... (similar structure to Sales section) ... */}

          {/* Gross Profit */}
          <div className="flex justify-between mt-2">
            <span className="font-semibold">GROSS PROFIT</span>
            <span className="text-right font-semibold">
              {incomeStatementData.grossProfit}
            </span>
          </div>

          {/* Other Expenses Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mt-4 mb-2">OTHER EXPENSES</h2>
            
          </div>

          {/* Net Income */}
          <div className="flex justify-between mt-4">
            <span className="font-semibold">NET INCOME</span>
            <span className="text-right font-semibold">
              {incomeStatementData.netIncome}
            </span>
          </div>
        </div>
      ) : (
        <p>Loading income statement...</p> // Or show an error message if there's an issue
      )}
    </div>
  );
}

export default MonthlyIncomeStatement;
