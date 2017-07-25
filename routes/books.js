'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/bookController');

/* GET users listing. */
router.post('/', controller.createBook);
router.get('/', controller.getAllBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);
router.get('/:id', controller.findOneBook);

module.exports = router;
