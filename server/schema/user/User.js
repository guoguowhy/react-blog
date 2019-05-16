var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    rank:Number,
    regtime:Date,
    updatetime:Date
});

var User = mongoose.model("User",userSchema);

module.exports = User;