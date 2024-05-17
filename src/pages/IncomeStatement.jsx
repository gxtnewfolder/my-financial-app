import React, { useState, useEffect } from 'react';

function MonthlyIncomeStatement() {
  const [incomeStatementData, setIncomeStatementData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(''); // For month selection dropdown

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/income-statement/${selectedMonth}`); 
        const data = await response.json();
        setIncomeStatementData(data);
      } catch (error) {
        console.error('Error fetching income statement data:', error);
        // Handle the error (e.g., show error message)
      }
    };

    if (selectedMonth) {
      fetchData();
    }
  }, [selectedMonth]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Monthly Income Statement</h2>

      {/* Month Selection Dropdown */}
      <select 
        value={selectedMonth} 
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
      >
        {/* Populate with month options (e.g., January, February, etc.) */}
      </select>

      {/* Income Statement Table (if data is loaded) */}
      {incomeStatementData && (
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            {/* Display revenue items */}
            {incomeStatementData.revenues.map((item) => (
              <tr key={item.name}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{item.amount}</td>
              </tr>
            ))}

            {/* Display total revenue */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Total Revenue</td>
              <td className="px-6 py-4 whitespace-nowrap text-right font-medium">{incomeStatementData.totalRevenue}</td>
            </tr>

            {/* ... (Display expense items and total expenses similarly) ... */}

            {/* Display net income */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Net Income</td>
              <td className="px-6 py-4 whitespace-nowrap text-right font-medium">{incomeStatementData.netIncome}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MonthlyIncomeStatement;
