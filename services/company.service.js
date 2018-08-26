// Gettign the Newly created Mongoose Model we just created 
var Company = require('../models/company.model')
var mongodb = require('mongodb');

// Saving the context of this module inside the _the variable
_this = this

exports.createCompany = async function(company){
    
    var newCompany = new User({
        companyname:company.name,
        address:company.address
        
    })


    try{       
    
        var savedCompany = await newCompany.save();
        return savedCompany;
    }catch(e){
        throw Error("Error occured while creating user")
    }
    // If no old Todo Object exists return false
    
}




