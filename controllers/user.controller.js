// Accessing the Service that we just created

var LoginService = require('../services/user.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.userLogin = async function(req, res, next){

    // Req.Body contains the form submit values.

    var user = { 
        data1:req.body.username,
        data2:req.body.password,             
        data3:req.body.fullname,
        data4:req.body.email,
        data5:req.body.contactnumber,
        data6:req.body.role,
        data7:req.body.createdbyid,
        data8:req.body.cmpid
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var loginUser = await LoginService.login(user)
        return res.status(201).json({status: 201, data: loginUser, message: "user Logged In Succesfully"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "User Login was Unsuccesfull"})
    }
}

exports.createUser = async function(req, res, next){

    // Id is necessary for the update        

    console.log(req.body)

    var user = { 
        data1:req.body.username,
        data2:req.body.password,             
        data3:req.body.fullname,
        data4:req.body.email,
        data5:req.body.contactnumber,
        data6:req.body.role,
        data7:req.body.createdbyid,
        data8:req.body.cmpid
    }

    try{
        var updatedUser = await LoginService.create(user)
        return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated User"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.getUsers = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    

    try{
    
        var users = await LoginService.getUsers({})
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: users, message: "Succesfully Users Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}


