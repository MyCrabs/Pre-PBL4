const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const use_router = require('./src/routes/home.routes')
const book_Router = require('./src/routes/Book.router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('',use_router)
app.use('/book',book_Router)

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
