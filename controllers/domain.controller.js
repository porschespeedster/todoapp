// Accessing the Service that we just created

var DomainService = require('../services/domain.service')

// Saving the context of this module inside the _the variable

_this = this

exports.createDomain = async function(req, res, next){

    // Id is necessary for the update        

    console.log(req.body)

    var domain = {
        name: req.body.name,
        description: req.body.description,         
        cmpid: req.body.cmpid
    }

    try{
        var createdDomain = await DomainService.createDomain(domain)
        return res.status(200).json({status: 200, data: createdDomain, message: "Domain Created Successfully"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.getDomains = async function(req, res, next){

    

    try{
    
        var domains = await DomainService.getDomains({})        
        
        
        return res.status(200).json({status: 200, data: domains, message: "Succesfully Domains Recieved"});
        
    }catch(e){       
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.getCompanyDomain = async function(req, res, next){

    

    try{
    
        var domains = await DomainService.getCompanyDomain(req.params.id)        
        
        
        return res.status(200).json({status: 200, data: domains, message: "Succesfully Domains Recieved"});
        
    }catch(e){       
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}


