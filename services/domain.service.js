
var Domain = require('../models/domain.model')
var mongodb = require('mongodb');


_this = this

exports.createDomain = async function(domain){
    
    var newDomain = new Domain({
        name:domain.name,
        description:domain.description,
        cmpid:domain.cmpid        
    })


    try{       
    
        var savedDomain = await newDomain.save();
        return savedDomain;
    }catch(e){
        throw Error("Error occured while creating a domain")
    }
    
    
}

exports.getDomains = async function(query){   
    
    
    try {
        var domains = await Domain.paginate(query)
        
        
        return domains;

    } catch (e) {

        
        throw Error('Error while Paginating Domains')
    }
}

exports.getCompanyDomain = async function(id){   
    
    
    try {
        var domains = await Domain.find({cmpid:id})       
        
        
        return domains;

    } catch (e) {

        
        throw Error('Error while Paginating Domains')
    }
}




