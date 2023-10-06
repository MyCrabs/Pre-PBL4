const express = require('express')
use_router = express.Router()
const {GetHomePage, GetABCPage} = require('../controllers/HomeController')

use_router.get('/',GetHomePage)

use_router.get('/abc', GetABCPage)

module.exports = use_router