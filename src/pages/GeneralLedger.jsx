import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getLedgerData } from '../component/mockAPI';

function GeneralLedger() {
  const [ledgerData, setLedgerData] = useState([]);
  const [filteredLedgerData, setFilteredLedgerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:3001/api/journal-entries",
          { mode: 'no-cors' } // Add no-cors mode
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();

        const transformedData = data.map(sale => ({
          id: sale.id,
          name: sale.name,
          balance: sale.balance,
          accountType: sale.accountType, // Assuming all data is under the Sales account
          date: sale.date, 
        }));

        setLedgerData(transformedData);
        setFilteredLedgerData(transformedData);
      } catch (error) {
        console.error("Error fetching ledger data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const filtered = ledgerData.map((accountType) => ({
      ...accountType,
      accounts: accountType.accounts.filter(
        (account) =>
          account &&
          account.name &&
          account.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }));
    setFilteredLedgerData(filtered);
  }, [searchTerm, ledgerData]);

  const handleGoBack = () => {
    navigate("/finance");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back
      </button>

      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex">
          <select
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md p-2 mr-2 flex-grow"
          >
            <option value="">Select Account</option>
            {ledgerData
              .flatMap((accountType) => accountType.accounts)
              .map((account) => (
                <option key={account.id} value={account.name}>
                  {account.name}
                </option>
              ))}
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              /* Implement search logic here */
            }}
          >
            Search Now
          </button>
        </div>
      </div>

      {/* General Ledger Table */}
      <h2 className="text-xl font-semibold mb-2">General Ledger</h2>
      {filteredLedgerData.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DATE
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                EXPLANATION
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DEBIT
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CREDIT
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                BALANCE
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLedgerData.flatMap((accountType) =>
              accountType.accounts.map((account) => (
                <tr key={account.id}>
                  {/* ... (table data rows remain the same) */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.debit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.credit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.balance}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <div className="bg-green-100 text-green-700 py-2 px-4 rounded border border-green-300 mt-4">
          Found {filteredLedgerData.length} Transactions
        </div>
      )}

      {/* Loading and Error State */}
      {/* You can add these based on your data fetching logic */}
    </div>
  );
}

export default GeneralLedger;
