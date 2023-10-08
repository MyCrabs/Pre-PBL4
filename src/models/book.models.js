const pool = require('../common/data');
const book = function(book)
{
    this.id = book.id;
    this.name = book.name;
    this.image = book.image;
    this.author_id = book.author_id;
}
book.get_All = function(result)
{
   pool.query("select * from book",function(err, book)
   {
    if(err) result(null);
    else result(book);
   })//result ni cung la 1 function.
} //cách gọi thường dùng

book.get_ByID = function(id, result)
{
    pool.query("SELECT * FROM book WHERE id = ?",id,function(err, book)
   {
    if(err) result (null);
    else result (book);
   })
}

book.createNewbook = function(data , result)
{
    pool.query("INSERT INTO book SET ?",data,function(err, book)
    {
        console.log(err);
     if(err) result (null);
     else result ({id: book.insertId, ...data}); //Dấu ... dùng để map cái id vừa lấy vào mảng data. Vì id tự động tăng nên Client ko có quyền set id
    })
}

book.remove = function(id, result)
{
    pool.query("DELETE FROM book WHERE id = ?", id, function(err, book)
    {
        if(err) result (null);
        else result("Xóa dữ liệu thành công book có id "+id);
    })
}
book.update = function(data, result)
{
    //console.log('>>> data = ' + data);
    pool.query("update book set name=?,image=?,author_id=? where id=?", [data.name,data.image,data.author_id,data.id],function(err, book)
    {
    //console.log('>>> err = ' + err);
     if(err) result (null);
     else result ({id: book.insertId, ...data}); //Dấu ... dùng để map cái id vừa lấy vào mảng data. Vì id tự động tăng nên Client ko có quyền set id
    })
}
module.exports = book;