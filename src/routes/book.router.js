express = require('express')
book_Router = express.Router()
const {GetbookPage, GetbookDetailPage, AddNewbook, Removebook, Updatebook} = require('../controllers/BookController')

book_Router.get('/',GetbookPage)
book_Router.get('/detail/:id',GetbookDetailPage)
book_Router.post('/add',AddNewbook)
book_Router.delete('/delete/:id',Removebook)
book_Router.put('/update',Updatebook)
module.exports = book_Router