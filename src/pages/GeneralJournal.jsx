import React, { useState, useEffect } from "react";
import { getJournalEntries } from "../component/mockAPI"; // Import mock API

function GeneralJournal() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(""); // For date filtering

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data (potentially with filtering based on selectedDate)
        const data = await getJournalEntries(selectedDate);
        setJournalEntries(data);
      } catch (error) {
        console.error("Error fetching journal entries:", error);
      }
    };
    fetchData();
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const groupByDate = (journalEntries) => {
    const groupedEntries = {};
    journalEntries.forEach((entry) => {
      const date = entry.date;
      if (!groupedEntries[date]) {
        groupedEntries[date] = [];
      }
      groupedEntries[date].push(entry);
    });
    return groupedEntries;
  };

  const groupedEntries = groupByDate(journalEntries);

  return (
    <div className="container mx-auto p-4">
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold mr-4">General Journal</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border rounded-md p-2"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Search Now
          </button>
        </div>
        <div className="text-gray-600">
          Total Journal Entries: {journalEntries.length}
        </div>
      </div>

      {/* Journal Entries Table */}
      {Object.entries(groupedEntries).map(([date, entries]) => (
        
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              {/* ... (table headers) */}
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider col-span-2">
                  Account Title and Explanation
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DEBIT
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CREDIT
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {entries.map((entry, index) => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* if first entry of the group, display the date only */} 
                    {index === 0 ? entry.date : null}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {entry.debitAccount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {entry.debit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {entry.credit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
      ))}
    </div>
  );
}

export default GeneralJournal;
