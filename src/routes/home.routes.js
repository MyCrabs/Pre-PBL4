const express = require('express')
const JWT = require('../common/_JWT')
use_router = express.Router()
const {GetHomePage, GetABCPage} = require('../controllers/HomeController')

use_router.get('/',GetHomePage)

use_router.get('/abc', GetABCPage)

use_router.get('/token',async function(req,res)
{
    var user = 
    {
        name: "Admin",
        email: "admin@gmail.com",
    };
    const _token = await JWT.make(user);
    res.send({token: _token});
})

module.exports = use_router