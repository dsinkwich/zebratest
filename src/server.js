const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.send('This is a test!'))
app.get('/description', (req, res) => res.send('Description'))
app.get('/count', (req, res) => res.send('Count characters'))

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = server
