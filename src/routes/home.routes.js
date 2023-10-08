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
        name: "Admin123",
        email: "admin@gmail.com",
    };
    const _token = await JWT.make(user);
    res.send(_token);
})

use_router.get('/checktoken', async function(req, res)
{
    var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbjEyMyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0sImlhdCI6MTY5Njc2NTk0OCwiZXhwIjoxNjk2NzY5NTQ4fQ.V0GzeLLwHNTR7xtFSD6q51evU3MgvxOsxnSAq46HP3U";
    const data = await JWT.check(_token);
    res.send(data);
})

module.exports = use_router