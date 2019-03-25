var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27030/blog");

var db = mongoose.connection;

db.once("open",function(){
    console.log("数据库成功打开");
});


module.exports = db;