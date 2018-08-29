var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var AutoIncrement = require('mongoose-sequence')(mongoose);


var UserSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password: String,
    email: String,
    contactnumber: String,
    role:String,
    createdbyid: Number,
    cmpid: Number       
})

UserSchema.plugin(mongoosePaginate)
UserSchema.plugin(AutoIncrement,{inc_field:'uid'})
const User = mongoose.model('User', UserSchema)

module.exports = User;










