'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/transactionController');

/* GET users listing. */
router.post('/', controller.createTransaction);
router.get('/', controller.getAllTransaction);
router.put('/:id', controller.updateTransaction);
router.delete('/:id', controller.deleteTransaction);
router.get('/:id', controller.getOneTransaction);

module.exports = router;
