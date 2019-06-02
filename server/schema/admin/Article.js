var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new mongoose.Schema({
    title:String,                   //标题
    author:String,                  //作者
    type:{
        type:Schema.Types.ObjectId,
        ref:"ArcType"
    },                              //文章类型
    read:Number,                    //阅读量
    createtime:Date,                //创建时间
    content:String,                 //内容
    support:Number,                 //点赞
    Tag:[],                         //标签
    updatetime:Date                 //更新时间
});



var Article = mongoose.model("Article",articleSchema);

module.exports = Article;