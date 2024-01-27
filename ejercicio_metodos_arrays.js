// Array de transacciones financieras
const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50 },
    { id: 2, description: 'Salary Deposit', amount: 2000 },
    { id: 3, description: 'Utility Bill Payment', amount: -100 },
    { id: 4, description: 'Online Purchase', amount: -30 }
];

// Calcular el saldo total utilizando reduce()
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
console.log('Total Balance: ', totalBalance);

// Encontrar la transacción con el mayor monto (en valor absoluto) utilizando reduce()
const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction;
}, transactions[0]);
console.log('Largest Transaction: ', largestTransaction);

// Filtrar las transacciones de compra (con monto negativo) utilizando filter()
const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0);
console.log('Purchase Transactions: ', purchaseTransactions);

// Encontrar una transacción específica por descripción utilizando find()
const specificTransaction = transactions.find(transaction => transaction.description === 'Online Purchase');
console.log('Specific Transaction: ', specificTransaction);

// Encontrar el índice de una transacción específica por monto utilizando findIndex()
const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30);
console.log('Index Transaction With Amount -30: ', indexTransactionWithAmount);

// Actualizar las descripciones de las transacciones utilizando forEach()
transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`;
    } else {
        transaction.description = `Income: ${transaction.description}`;
    }
});
console.log('Updated Transactions: ', transactions);
