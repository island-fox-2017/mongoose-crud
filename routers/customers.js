const express = require('express')
const router = express.Router()
const customercont = require('../controllers/customersController')

router.get('/', customercont.getAllCustomers)
router.get('/:id', customercont.getSingleCustomer)
router.post('/', customercont.addNewCustomer)
router.put('/:id', customercont.updateCustomer)
router.delete('/:id', customercont.deleteCustomer)

module.exports = router
