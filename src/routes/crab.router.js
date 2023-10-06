express = require('express')
Crab_Router = express.Router()
const {GetCrabPage, GetChildCrabPage, AddNewCrab, RemoveCrab, UpdateCrab} = require('../controllers/CrabController')

Crab_Router.get('/',GetCrabPage)
Crab_Router.get('/child/:id',GetChildCrabPage)
Crab_Router.post('/add',AddNewCrab)
Crab_Router.delete('/delete/:id',RemoveCrab)
Crab_Router.put('/update/:id',UpdateCrab)
module.exports = Crab_Router