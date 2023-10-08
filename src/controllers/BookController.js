const { response } = require('express');
const mybook = require('../models/book.models');
const GetbookPage = (req,res) =>
{  
    mybook.get_All(function(data)
    {
        res.send({data});
    });
}
const GetbookDetailPage = (req,res) =>
{
    mybook.get_ByID(req.params.id, function(response)
    {
        res.send({result: response});
    });
}

const AddNewbook = function(req, res)
{
    var data = req.body;
    mybook.createNewbook(data, function(response){
        res.send({response});
    });
}

const Removebook = function(req, res)
{
    var id = req.params.id;
    mybook.remove(id, function(response)
    {
        res.send({response});
    });
}

const Updatebook = function(req, res)
{
    var data = req.body;
    mybook.update(data, function(response)
    {
        res.send({response});
    });
}
module.exports = {GetbookPage, GetbookDetailPage, AddNewbook, Removebook, Updatebook}