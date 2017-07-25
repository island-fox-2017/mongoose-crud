const express = require('express');
const router = express.Router()
const controllers = require('../controllers/transactions')


router.get('/', controllers.findAllTransaction)

router.get('/:id', controllers.findTransactionById)

router.post('/', controllers.insertTransaction)

router.delete('/:id', controllers.deleteTransaction)

router.put('/:id', controllers.editTransactionOne)

router.post('/:id', controllers.addBookTransaction)

module.exports = router;
