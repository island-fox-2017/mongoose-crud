const express = require('express');
const books = require('../controllers/books')

var router = express.Router();


router.get('/books', books.selectAllBooks);
router.post('/books', books.insertBooks);
router.get('/books/:id', books.selectBooksById);
router.delete('/books/:id', books.deleteBooks);
router.put('/books/:id', books.updateBooks);



module.exports = router;
