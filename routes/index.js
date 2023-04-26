const router = require('express').Router()
const booksRouter = require('./booksRouter')

router.use('/api/v1', booksRouter)

module.exports = router