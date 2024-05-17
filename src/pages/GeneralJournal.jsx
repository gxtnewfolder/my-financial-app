import React, { useState, useEffect } from 'react';

function GeneralJournal() {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/journal-entries'); // Replace with your actual API endpoint
        const data = await response.json();
        setJournalEntries(data);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
        // Handle the error, e.g., show an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">General Journal</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            {/* Add more table headers for Account, Debit, Credit, etc. */}
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Debit</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {journalEntries.map((entry) => (
            <tr key={entry.id}>
              <td className="px-6 py-4 whitespace-nowrap">{entry.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.account}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.debit}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.credit}</td>
              {/* Display other entry details in table cells */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneralJournal;
