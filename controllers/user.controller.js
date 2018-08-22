// Accessing the Service that we just created

var LoginService = require('../services/user.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.userLogin = async function(req, res, next){

    // Req.Body contains the form submit values.

    

    var user = { 
        data1:req.body.username,
        data2:req.body.password             
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
        username: req.body.username,
        password: req.body.password        
    }

    try{
        var updatedUser = await LoginService.create(user)
        return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated User"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}


