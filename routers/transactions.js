const express = require('express');
const transactions = require('../controllers/transactions')

var router = express.Router();

router.get('/transactions', transactions.selectAllTransactions);
router.post('/transactions', transactions.insertTransactions);
router.get('/transactions/:id', transactions.selectTransactionsById);
router.delete('/transactions/:id', transactions.deleteTransactions);
router.put('/transactions/:id', transactions.updateTransactions);

module.exports = router;
