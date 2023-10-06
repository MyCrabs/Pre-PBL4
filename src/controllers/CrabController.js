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

const AddNewCrab = function(req, res)
{
    var data = req.body;
    mycrab.createNewcrab(data, function(response){
        res.send({response});
    });
}

const RemoveCrab = function(req, res)
{
    var id = req.params.id;
    mycrab.remove(id, function(response)
    {
        res.send({response});
    });
}

const UpdateCrab = function(req, res)
{
    var data = req.body;
    mycrab.update(data, function(response)
    {
        res.send({response});
    });
}
module.exports = {GetCrabPage, GetChildCrabPage, AddNewCrab, RemoveCrab, UpdateCrab}