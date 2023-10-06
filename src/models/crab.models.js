const Crab = function(crab)
{
    this.id = crab.id;
    this.name = crab.name;
}
Crab.get_All = function(result)
{
    var data = [
        {"id":1, "name": "Crab 1"},
        {"id":2, "name": "Crab 2"},
        {"id":3, "name": "Crab 3"},
        {"id":4, "name": "Crab 4"},
    ];
    result(data);//result ni cung la 1 function.
} //cách gọi thường dùng

Crab.get_ByID = function(id)
{
    var data = {"id":id, "name": "Crab 1"}
    return data;
}
module.exports = Crab;