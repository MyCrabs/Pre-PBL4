const mycrab = require('../models/crab.models');
const GetCrabPage = (req,res) =>
{  
    mycrab.get_All(function(data)
    {
        res.send({data});
    });
}
const GetChildCrabPage = (req,res) =>
{
    var data = mycrab.get_ByID(req.params.id);
    res.send({data});
}
module.exports = {GetCrabPage, GetChildCrabPage}