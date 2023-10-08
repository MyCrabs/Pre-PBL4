const jwt = require('jsonwebtoken');
require('dotenv').config();

//make => tao ma token

let make = function(user )
{
    return new Promise(function (resolve, reject)
    {
        jwt.sign(
            { data: user},process.env.ACCESS_TOKEN,{
                algorithm: "HS256",
                expiresIn: process.env.TOKEN_EXPIRATION,
            },
            function (err, _token)
            {
                if(err) return reject(err);
                return resolve(_token);
            }
        )
    })
}

//check => xac thuc ma dung, sai, het han

let check = function (token)
{
    return new Promise((resolve, reject) =>
    {
        jwt.verify(token, process.env.ACCESS_TOKEN, function(err, data)
        {
            if(err) return reject(err);
            return resolve(data);
        })
    })
}

module.exports= {
    make: make,
    check: check,
}

