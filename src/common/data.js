const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo_node_api',
})

pool.query(function(err)
{
    if(err) console.log("Ket noi CSDL thanh cong");
})

module.exports = pool