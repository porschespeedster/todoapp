// Accessing the Service that we just created

var CompanyService = require('../services/company.service')

// Saving the context of this module inside the _the variable

_this = this

exports.createCompany = async function(req, res, next){

    // Id is necessary for the update        

    console.log(req.body)

    var company = {
        name: req.body.name,
        address:   (req.body.addressl1 ? req.body.addressl1  +',' : '')
                 + (req.body.addressl2 ? req.body.addressl2  +',' : '') 
                 + (req.body.city      ? req.body.city       +',' : '') 
                 + (req.body.pincode   ? req.body.pincode    +',' : '') 
                 + (req.body.state     ? req.body.state      +',' : '') 
                 + (req.body.country   ? req.body.country    +',' : '')         
    }

    try{
        var updatedCompany = await CompanyService.createCompany(company)
        return res.status(200).json({status: 200, data: updatedCompany, message: "Company Created Successfully"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.getCompanies = async function(req, res, next){

    

    try{
    
        var companies = await CompanyService.getCompanies({})
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: companies, message: "Succesfully Companies Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}


