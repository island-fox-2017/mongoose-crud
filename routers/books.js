const express = require('express');
const controller = require('../controllers/library')

var router = express.Router();


router.get('/books', controller.selectAllBooks)
router.get('/books/:id', controller.selectBooksById)


module.exports = router;
