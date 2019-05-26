/**
 * 用户表：
 * 用户名、密码、等级（0：超级管理员，不可注册，可登陆后台管理；1：普通用户，可注册，不可登陆后台管理）、注册时间、修改时间
 */

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