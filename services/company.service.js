// Gettign the Newly created Mongoose Model we just created 
var Company = require('../models/company.model')
var mongodb = require('mongodb');

// Saving the context of this module inside the _the variable
_this = this

exports.createCompany = async function(company){
    
    var newCompany = new Company({
        name:company.name,
        address:company.address
        
    })


    try{       
    
        var savedCompany = await newCompany.save();
        return savedCompany;
    }catch(e){
        throw Error("Error occured while creating a company")
    }
    // If no old Todo Object exists return false
    
}

exports.getCompanies = async function(query){

   
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var companies = await Company.paginate(query)
        
        // Return the todod list that was retured by the mongoose promise
        return companies;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Error while Paginating Todos')
    }
}




