const express = require('express')
const router = express.Router()
const transactions = require('../controllers/transactions')

router.get('/', transactions.getData)
router.post('/', transactions.insertData)
router.put('/:id',transactions.editData)
router.delete('/:id',transactions.deleteData)


 module.exports = router;
