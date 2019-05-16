const router = require('koa-router')()
var util = require("util");
var formidable = require("formidable");


var Article = require("../../schema/admin/Article.js");
var artTypeModel = require("./ArticleType.js");

module.exports = {
    findArticle:function(params,callback){
        Article.find(params || {}).populate("type").exec(function(err,result){
            callback(err,result);
        });
    },
    addArticle:function(params,callback){
        Article.create(params,function(err,result){
            callback(err,result);
        });
    },
    delArticle:function(params,callback){
    	Article.remove(params,function(err){
    		callback(err)
    	});
    }
}