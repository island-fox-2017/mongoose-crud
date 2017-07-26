const express = require('express');
const customers = require('../controllers/customers')

var router = express.Router();


router.get('/customers', customers.selectAllCustomers);
router.post('/customers', customers.insertCustomers);
router.get('/customers/:id', customers.selectCustomersById);
router.delete('/customers/:id', customers.deleteCustomers);
router.put('/customers/:id', customers.updateCustomers);

module.exports = router;
