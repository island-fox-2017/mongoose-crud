const express = require('express');
const router = express.Router()
const controllers = require('../controllers/customers')


router.get('/', controllers.findAllCust)

router.get('/:id', controllers.findCustById)

router.post('/', controllers.insertCust)

router.delete('/:id', controllers.deleteCust)

router.put('/:id', controllers.editOneCust)


module.exports = router;
