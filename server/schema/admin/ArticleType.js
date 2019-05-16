var mongoose = require('mongoose');

var arcTypeSchema = new mongoose.Schema({
    typename:String
});

var ArcType = mongoose.model("ArcType",arcTypeSchema);


module.exports = ArcType;