const express = require('express');
const router = express.Router()
const controllers = require('../controllers/books')

router.get('/', controllers.findAllDocument)

router.get('/:id', controllers.findDocumentById)

router.post('/', controllers.insertDocument)

router.delete('/:id', controllers.deleteDocument)

router.put('/:id', controllers.editOne)

module.exports = router;
