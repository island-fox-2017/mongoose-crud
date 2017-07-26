var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/booksController')

/* GET users listing. */
router.get('/', booksCtrl.getAll)
router.get('/:id', booksCtrl.getOne)
router.post('/', booksCtrl.create)
router.put('/:id', booksCtrl.update)
router.delete('/:id', booksCtrl.remove)

module.exports = router;
