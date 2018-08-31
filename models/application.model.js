var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var AutoIncrement = require('mongoose-sequence')(mongoose);


var ApplicationSchema = new mongoose.Schema({
    name: String,
    domain: String,    
    cmpid: Number,
    createdByUid: Number       
})

ApplicationSchema.plugin(mongoosePaginate)
ApplicationSchema.plugin(AutoIncrement,{inc_field:'appid'})
const Application = mongoose.model('Application', ApplicationSchema)

module.exports = Application;










