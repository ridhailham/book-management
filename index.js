const express = require('express')

const app = express()
const port = 3000

const router = require('./routes/index')

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.json({
        massage: "hello ini response menggunakan json"
    })
    res.send('hello ini express guys')
})

app.get('/about', (req, res) => {
    res.send('<h1>hello adalah about</h1>')
})

app.get('/users/:id', (req, res) => {
    res.send(`ini merupakan user dengan id ${id}`)
})

app.listen(port, () => {
    console.log(`server running onb port ${port}`);
})