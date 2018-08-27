var mongoose = require('mongoose')
var AutoIncrement = require('mongoose-sequence')(mongoose);
var mongoosePaginate = require('mongoose-paginate');


var CompanySchema = new mongoose.Schema({
    name: String,
    address: String
    

})

// autoIncrement.setDefaults({
    
//     field:CompanySchema.companyid,
//     step:1
// });


CompanySchema.plugin(mongoosePaginate)
CompanySchema.plugin(AutoIncrement,{inc_field:'cmpid'})
const Company = mongoose.model('Company', CompanySchema)

module.exports = Company;