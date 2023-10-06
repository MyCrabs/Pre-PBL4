const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const use_router = require('./src/routes/home.routes')
const Crab_Router = require('./src/routes/crab.router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('',use_router)
app.use('/crab',Crab_Router)

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
