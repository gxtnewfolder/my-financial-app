// mockApi.js

function generateRandomJournalEntries(numEntries = 10, filterDate = '') {
  const debitAccounts = ['Accounts Receivable', 'Cost of Goods Sold'];
  const creditAccounts = ['Sales Revenue', 'Inventory'];

  const entries = [];
  for (let i = 0; i < numEntries; i++) {
    const date = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const debitAccount = debitAccounts[Math.floor(Math.random() * debitAccounts.length)];
    const creditAccount = creditAccounts[Math.floor(Math.random() * creditAccounts.length)];
    const amount = Math.round(Math.random() * 100000) / 100;

    // Generate a random reference number (you'll likely want to make this more realistic)
    const refNo = Math.random().toString(36).slice(2, 8).toUpperCase();

    if (!filterDate || date === filterDate) {
      entries.push({
        id: i + 1,
        date,
        description: `Transaction ${i + 1}`,
        debitAccount,
        creditAccount,
        amount,
      });
    }
  }
  return entries;
}

function generateRandomLedgerData(numAccounts = 15, accountNameFilter = '') {
  const assetAccounts = ['Accounts Receivable', 'Inventory-Diesel', 'Inventory-Gasoline95'];
  const liabilityAccounts = [];
  const equityAccounts = [];
  const revenueAccounts = ['Sales Revenue'];
  const expenseAccounts = ['Cost of Goods Sold'];

  const accounts = [];
  for (let i = 0; i < numAccounts; i++) {
    let accountType, name, balance;
    if (i < assetAccounts.length) {
      accountType = 'Assets';
      name = assetAccounts[i];
      balance = Math.round(Math.random() * 100000);
    } else if (i < assetAccounts.length + liabilityAccounts.length) {
      accountType = 'Liabilities';
      name = liabilityAccounts[i - assetAccounts.length];
      balance = -Math.round(Math.random() * 50000);
    } else if (i < assetAccounts.length + liabilityAccounts.length + equityAccounts.length) {
      accountType = 'Equity';
      name = equityAccounts[i - assetAccounts.length - liabilityAccounts.length];
      balance = Math.round(Math.random() * 200000);
    } else if (i < assetAccounts.length + liabilityAccounts.length + equityAccounts.length + revenueAccounts.length) {
      accountType = 'Revenue';
      name = revenueAccounts[i - assetAccounts.length - liabilityAccounts.length - equityAccounts.length];
      balance = Math.round(Math.random() * 150000);
    } else {
      accountType = 'Expenses';
      name = expenseAccounts[i - assetAccounts.length - liabilityAccounts.length - equityAccounts.length - revenueAccounts.length];
      balance = -Math.round(Math.random() * 80000);
    }

    const date = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10); // Random date within the last 30 days
    if (!accountNameFilter || name.toLowerCase().includes(accountNameFilter.toLowerCase())) {
      accounts.push({
        id: i + 1,
        name,
        balance,
        accountType,
        date, // Added date field
      });
    }
  }

  const groupedAccounts = accounts.reduce((acc, account) => {
    acc[account.accountType] = acc[account.accountType] || [];
    acc[account.accountType].push(account);
    return acc;
  }, {});

  return Object.entries(groupedAccounts).map(([key, value]) => ({
    name: key,
    accounts: value,
  }));
}

function simulateApiDelay(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
}

export const getJournalEntries = async (filterDate = '') => {
  const journalEntries = generateRandomJournalEntries(10, filterDate);
  return simulateApiDelay(journalEntries);
};

export const getLedgerData = async () => {
  const ledgerData = generateRandomLedgerData();
  return simulateApiDelay(ledgerData);
};

export const getIncomeStatementData = async (selectedMonth) => {
  // ... (fetch/generate data based on the selectedMonth)
  return {
    month: selectedMonth,
    sales: [
      { item: 'GASOHOL 95', amount: 100000 },
      { item: 'DIESEL', amount: 100000 },
    ],
    totalSales: 200000,
    costOfGoodsSold: [
      { item: 'GASOHOL 95', amount: 50000 },
      { item: 'DIESEL', amount: 50000 },
    ],
    totalCostOfGoodsSold: 100000,
    grossProfit: 100000, // Calculated
    // ... other expenses (salaries, utilities, etc.)
    totalExpenses: 13500, // Calculated
    netIncome: 86500, // Calculated
  };
};

// mockApi.js

export const fetchPurchaseOrder = async (searchQuery = "") => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust delay as needed

  const purchaseOrders = [
    {
      id: 1,
      poNumber: 'PO-12345',
      invoiceNumber: 'PAY-98765',
      date: '2024-05-20',
      customerId: 'CUS-001',
      customerName: 'ABC Company',
      taxPayerId: '1234567890123',
      items: [
        { id: 1, name: 'Gasoline 95', pricePerLiter: 35.50, quantity: 1000, amount: 35500 },
        { id: 2, name: 'Diesel', pricePerLiter: 32.00, quantity: 1500, amount: 48000 },
      ],
      totalAmount: 83500,
    },
    {
      id: 2,
      poNumber: 'PO-54321',
      invoiceNumber: 'PAY-56789',
      date: '2024-05-18',
      customerId: 'CUS-002',
      customerName: 'XYZ Corporation',
      taxPayerId: '9876543210987',
      items: [
        { id: 3, name: 'Gasoline 91', pricePerLiter: 33.80, quantity: 800, amount: 27040 },
        { id: 4, name: 'Premium Diesel', pricePerLiter: 38.20, quantity: 1200, amount: 45840 },
      ],
      totalAmount: 72880,
    },
    // Add more purchase orders as needed
  ];

  if (searchQuery) {
    return purchaseOrders.filter((po) => 
      po.poNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    return purchaseOrders; // Return all purchase orders if no search query
  }
};
