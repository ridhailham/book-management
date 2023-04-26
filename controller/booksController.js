const { Book } = require('../models')

const findAllBooks = async (req, res) => {
    try {
        const data = await Book.findAll()

        const result = {
            status: 'ok',
            data: data,
        }

        res.json(result)

    } catch (error) {
        console.log(error, 'error find all books');
    }
}

const getBookById = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Book.findByPk(id)

        if(data === null) {
            return res.json({
                status: 'failed',
                massage: `data book with id ${id} is not found`
            })
        }

        res.json({
            status: 'ok',
            data: data
        })
    } catch (error) {
        console.log('error get book by id');
    }
}

const createNewBook = async (req, res) => {
    try {
        const { title, description } = req.body

        const newBook = await Book.create({ title: title, description: description })

        res.status(201).json({
            status: 'ok',
            data: {
                id: newBook.id,
                title: newBook.title,
                description: newBook.description,
                createdAt: newBook.createdAt,
                updatedAt: newBook.updatedAt
            }
        })

    } catch (error) {
        console.log(error, 'error create new book');
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params

        const { title, description } = req.body

        const book = await Book.findByPk(id)

        if(!book) {
            return res.status(401).json({
                status: 'failed',
                massage: `data book with id ${id} is not exist`
            })
        }

        book.title = title
        book.description = description
        book.updatedAt = new Date()

        book.save()

        res.json({
            status: 'ok',
            data: {
                id: book.id,
                title: book.title,
                description: book.description,
                createdAt: book.createdAt,
                updatedAt: book.updatedAt
            }
        })
    } catch (error) {
        console.log(error, 'error update book')
    }
}

const destroyBook = async (req, res) => {
    try {
        const { id } = req.params

        const book = await Book.findByPk(id)

        if(!book) {
            return res.status(401).json({
                status: 'failed',
                massage: `book with id ${id} is not found`
            })
        }

        book.destroy()

        res.json({
            status: 'ok',
            massage: `success delete book with id ${id}`
        })

    } catch (error) {
        console.log(error, 'error delete book');
    }    
}


module.exports = {
    findAllBooks,
    getBookById,
    createNewBook,
    updateBook,
    destroyBook
}