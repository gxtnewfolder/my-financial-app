import React, { useState, useEffect } from 'react';

function GeneralLedger() {
  const [ledgerData, setLedgerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/general-ledger'); 
        const data = await response.json();
        setLedgerData(data);
      } catch (error) {
        console.error('Error fetching general ledger data:', error);
        // Handle the error (e.g., show error message)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">General Ledger</h2>

      {/* Loop through account types (e.g., assets, liabilities) */}
      {ledgerData.map((accountType) => (
        <div key={accountType.name}>
          <h3 className="text-xl font-medium mb-2">{accountType.name}</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Name</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {accountType.accounts.map((account) => (
                <tr key={account.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{account.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{account.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default GeneralLedger;
