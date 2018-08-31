// Accessing the Service that we just created

var ApplicationService = require('../services/application.service')

// Saving the context of this module inside the _the variable

_this = this

exports.createApplication = async function(req, res, next){

    // Id is necessary for the update        

    console.log(req.body)

    var application = {
        name: req.body.name,
        domain: req.body.domain,         
        cmpid: req.body.cmpid,
        createdByUid: req.body.createdByUid,
    }

    try{
        var createdApplication = await ApplicationService.createApplication(application)
        return res.status(200).json({status: 200, data: createdApplication, message: "Application Created Successfully"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.messaDomaine})
    }
}

exports.getApplications = async function(req, res, next){    

    try{
    
        var applications = await ApplicationService.getApplications({})                
        
        return res.status(200).json({status: 200, data: applications, message: "Succesfully Applications Recieved"});
        
    }catch(e){               
        return res.status(400).json({status: 400, message: e.message});        
    }
}

exports.getApplicationByDomain = async function(req, res, next){

    try{    
        var applications = await ApplicationService.getApplicationByDomain(req.params.domain)                
        
        return res.status(200).json({status: 200, data: applications, message: "Succesfully Applications by domain Recieved"});
        
    }catch(e){       
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}


