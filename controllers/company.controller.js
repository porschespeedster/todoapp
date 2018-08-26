// Accessing the Service that we just created

var CompanyService = require('../services/company.service')

// Saving the context of this module inside the _the variable

_this = this

exports.createCompany = async function(req, res, next){

    // Id is necessary for the update        

    console.log(req.body)

    var company = {
        username: req.body.name,
        password: req.body.address        
    }

    try{
        var updatedCompany = await CompanyService.create(company)
        return res.status(200).json({status: 200, data: updatedCompany, message: "Company Created Successfully"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}


