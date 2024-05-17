// GeneralJournal.jsx

import React, { useState, useEffect } from 'react';

function GeneralJournal() {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/journal-entries'); // Your API endpoint
      const data = await response.json();
      setJournalEntries(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>General Journal</h2>
      {/* Display journal entries from the fetched data */}
      {journalEntries.map(entry => (
        <div key={entry.id}>
          {/* ... entry details */}
        </div>
      ))}
    </div>
  );
}
