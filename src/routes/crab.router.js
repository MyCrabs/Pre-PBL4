express = require('express')
Crab_Router = express.Router()
const {GetCrabPage, GetChildCrabPage} = require('../controllers/CrabController')

Crab_Router.get('/',GetCrabPage)
Crab_Router.get('/child/:id',GetChildCrabPage  )

module.exports = Crab_Router