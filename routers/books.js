const express = require('express');
const controller = require('../controllers/library')

var router = express.Router();


router.get('/books', controller.selectAllBooks);
router.post('/books', controller.insertBooks);
router.get('/books/:id', controller.selectBooksById);
router.delete('/books/:id', controller.deleteBooks);
router.put('/books/:id', controller.updateBooks);


module.exports = router;
