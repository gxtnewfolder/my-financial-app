const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql'); // Import mssql

const app = express();
const port = process.env.PORT || 3001;

// Azure SQL Database Configuration
const config = {
  user: 'miniprogroup2',        // Replace with your Azure SQL username
  password: 'inc.372g2',    // Replace with your Azure SQL password
  server: 'minipro372-g2-server.database.windows.net', // Replace with your Azure SQL server name
  database: 'minipro372-g2-db', // Replace with your Azure SQL database name
  options: {
    encrypt: true, // Use encryption (recommended)
  }
};

// API Endpoints

// GET /api/journal-entries
app.get('/api/journal-entries', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM FINAL`; // Replace with your actual table name
    res.json(result.recordset); // Send the data as JSON
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// GET /api/general-ledger
// app.get('/api/general-ledger', async (req, res) => {
//   try {
//     await sql.connect(config);
//     const result = await sql.query`SELECT * FROM GeneralLedger`; // Replace with your actual table name
//     res.json(result.recordset); 
//   } catch (err) {
//     console.error('Error querying database:', err);
//     res.status(500).json({ error: 'Database query failed' });
//   }
// });

// ... other endpoints (for purchase orders, invoices, etc.)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
