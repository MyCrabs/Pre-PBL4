const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const use_router = require('./src/routes/home.routes')

app.use('',use_router);

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
