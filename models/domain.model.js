var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var AutoIncrement = require('mongoose-sequence')(mongoose);


var DomainSchema = new mongoose.Schema({
    name: String,
    description: String,    
    cmpid: Number       
})

DomainSchema.plugin(mongoosePaginate)
DomainSchema.plugin(AutoIncrement,{inc_field:'dmid'})
const Domain = mongoose.model('Domain', DomainSchema)

module.exports = Domain;










