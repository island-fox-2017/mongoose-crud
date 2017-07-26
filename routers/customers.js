const express = require('express')
const router = express.Router()
const customers = require('../controllers/customers')


router.get('/',customers.getData)
router.post('/',customers.insertData)
router.put('/:id',customers.updateData)
router.delete('/:id',customers.removeData)

module.exports = router;
