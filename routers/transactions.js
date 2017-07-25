const express = require('express');
const router = express.Router();
const transactionCont = require('../controllers/transactionsController');

router.get('/', transactionCont.getAllTransactions);
router.get('/:id', transactionCont.getSingleTransaction);
router.post('/', transactionCont.addNewTransaction);
router.post('/:id', transactionCont.pushToBookList);
router.delete('/:id', transactionCont.deleteTransaction);
router.put('/:id', transactionCont.updateTransaction);

module.exports = router;
