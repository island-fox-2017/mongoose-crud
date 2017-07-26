const express = require('express')
const router = express.Router()
const library = require('../controllers/books')


router.get('/',library.viewAll)
router.post('/',library.insertBook)
router.put('/:id',library.updateBook)
router.delete('/:id',library.deleteBook)
module.exports = router;
