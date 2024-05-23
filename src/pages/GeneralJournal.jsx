import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getJournalEntries } from '../component/mockAPI';

function GeneralJournal() {
  const navigate = useNavigate(); // Get the navigation function

  const handleGoBack = () => {
    navigate('/finance'); // Navigate to the home page
  };
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJournalEntries(selectedDate); 
        setJournalEntries(data);
        console.log('Journal Entries:', data);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
      }
    };
    fetchData();
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
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
        <div className="text-gray-600">Total Journal Entries: {journalEntries.length}</div>
      </div>
      
      {/* Journal Entries Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Title and Explanation</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DEBIT</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CREDIT</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {journalEntries.flatMap((entry) => [
              // Debit Row
              <tr key={`${entry.id}-debit`}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{entry.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.debitAccount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{entry.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right"></td>
              </tr>,
              // Credit Row
              <tr key={`${entry.id}-credit`}>
                <td></td> {/* Empty cell for Date */}
                <td className="px-20 py-4 whitespace-nowrap">{entry.creditAccount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right"></td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{entry.amount}</td>
              </tr>,
            ])}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GeneralJournal;