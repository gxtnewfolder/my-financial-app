// mockApi.js

function generateRandomJournalEntries(numEntries = 10, filterDate = '') {
    const accounts = ['Cash', 'Accounts Receivable', 'Inventory', 'Prepaid Expenses', 'Accounts Payable', 'Unearned Revenue', 'Common Stock', 'Retained Earnings', 'Sales Revenue', 'Cost of Goods Sold', 'Salaries Expense', 'Rent Expense', 'Utilities Expense'];

    const entries = [];
    for (let i = 0; i < numEntries; i++) {
        const date = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
        const debitAccount = accounts[Math.floor(Math.random() * accounts.length)];
        const creditAccount = accounts[Math.floor(Math.random() * accounts.length)];
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
    const assetAccounts = ['Cash', 'Accounts Receivable', 'Inventory', 'Prepaid Expenses', 'Land', 'Building', 'Equipment'];
    const liabilityAccounts = ['Accounts Payable', 'Notes Payable', 'Accrued Expenses', 'Bonds Payable'];
    const equityAccounts = ['Common Stock', 'Retained Earnings', 'Additional Paid-in Capital'];
    const revenueAccounts = ['Sales Revenue', 'Interest Revenue', 'Service Revenue'];
    const expenseAccounts = ['Cost of Goods Sold', 'Salaries Expense', 'Rent Expense', 'Utilities Expense', 'Advertising Expense'];
  
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
