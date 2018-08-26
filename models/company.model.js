var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require("mongodb-autoincrement");


var CompanySchema = new mongoose.Schema({
    name: String,
    address: String    
})

CompanySchema.plugin(mongoosePaginate);
CompanySchema.plugin(autoIncrement)
const Company = mongoose.model('Company', UserSchema)

module.exports = Company;