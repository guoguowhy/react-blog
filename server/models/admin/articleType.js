const router = require('koa-router')()
// var util = require("util");
// var formidable = require("formidable");


var ArticleType = require("../../schema/admin/ArticleType.js");

module.exports = {
    findType:function(params,callback){
        ArticleType.find(params || {},function(err,result){
            callback(err,result);
        });
    },
    createType:function(params,callback){
        ArticleType.create(params,function(err,result){
            callback(err,result);
        });
    },
    delType:function(params,callback){
    	ArticleType.remove(params,function(err){
    		callback(err)
    	});
    }
}