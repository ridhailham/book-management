const router = require('express').Router()

const { findAllBooks, getBookById, createNewBook, updateBook, destroyBook } = require('../controller/booksController')


router.get('/books', findAllBooks)
router.get('/books/:id', getBookById)
router.post('/books', createNewBook)
router.patch('/books/:id', updateBook)
router.delete('/books/:id', destroyBook)

module.exports = router