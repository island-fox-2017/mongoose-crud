const express = require('express');
const router = express.Router();
const bookscont = require('../controllers/booksController')

router.get('/', bookscont.getAllBooks)
router.get('/:id', bookscont.getSingleBook)
router.post('/', bookscont.addNewBook)
router.put('/:id', bookscont.updateBook)
router.delete('/:id', bookscont.deletebook)

module.exports = router
