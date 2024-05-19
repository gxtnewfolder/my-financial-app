// mockApi.js

function generateRandomJournalEntries(numEntries = 10, filterDate = '') {
    const accounts = ['Cash', 'Accounts Receivable', 'Inventory', 'Prepaid Expenses', 'Accounts Payable', 'Unearned Revenue', 'Common Stock', 'Retained Earnings', 'Sales Revenue', 'Cost of Goods Sold', 'Salaries Expense', 'Rent Expense', 'Utilities Expense'];

    const entries = [];
    for (let i = 0; i < numEntries; i++) {
        const date = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
        const debitAccount = accounts[Math.floor(Math.random() * accounts.length)];
        const creditAccount = accounts[Math.floor(Math.random() * accounts.length)];
        const debit = Math.round(Math.random() * 100000) / 100;
        const credit = Math.round(Math.random() * 100000) / 100;

        // Generate a random reference number (you might want to make this more realistic)

        if (!filterDate || date === filterDate) {
            entries.push({
                id: i + 1,
                date,
                debitAccount,
                creditAccount,
                debit,
                credit,
            });
        }
    }
    return entries;
}

function simulateApiDelay(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 500);
    });
}

export const getJournalEntries = async (filterDate = '') => {
    const journalEntries = generateRandomJournalEntries(10, filterDate); // Pass filterDate
    return simulateApiDelay(journalEntries);
};
