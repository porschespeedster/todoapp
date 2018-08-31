
var Application = require('../models/application.model')
var mongodb = require('mongodb');


_this = this

exports.createApplication = async function(application){
    
    var newAppliaction = new Application({
        name:application.name,
        domain:application.domain,
        cmpid:application.cmpid,
        cmpid:application.createdByUid        
    })


    try{       
    
        var savedApplication = await newAppliaction.save();
        return savedApplication;
    }catch(e){
        throw Error("Error occured while creating an application")
    }    
    
}

exports.getApplications = async function(query){   
    
    
    try {
        var applications = await Application.paginate(query)
        
        
        return applications;

    } catch (e) {

        
        throw Error('Error while Paginating Applications')
    }
}

exports.getApplicationByDomain = async function(domain){   
    
    
    try {
        var applications = await Application.find({domain:domain})       
        return applications;

    } catch (e) {        
        throw Error('Error while Paginating Applications of a domain')
    }
}




