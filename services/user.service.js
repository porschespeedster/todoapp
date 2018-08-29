// Gettign the Newly created Mongoose Model we just created 
var User = require('../models/user.model')
var mongodb = require('mongodb');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List
exports.login = async function(user){

    // Options setup for the mongoose paginate
    var options = {
        username:user.data1,
        password:user.data2,
        fullname:user.data3,
        email:user.data4,
        contactnumber:user.data5,
        role:user.data6,
        createdbyid:user.data7,
        cmpid:user.data8
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        // var userss = await User.find(options.username)      
        var userss = await User.find({"username":options.username})      
        // Return the todod list that was retured by the mongoose promise
        return userss;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Users')
    }
}

exports.create = async function(user){
    
    var newUser = new User({
        username:user.data1,
        password:user.data2,
        fullname:user.data3,
        email:user.data4,
        contactnumber:user.data5,
        role:user.data6,
        createdbyid:user.data7,
        cmpid:user.data8
    })


    try{       
    
        var savedUser = await newUser.save();
        return savedUser;
    }catch(e){
        throw Error("Error occured while creating user")
    }
    // If no old Todo Object exists return false
    
}

exports.getUsers = async function(query, page, limit){

    
    
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var users = await User.paginate(query)
        
        // Return the todod list that was retured by the mongoose promise
        return users;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Error while Paginating Uses')
    }
}




