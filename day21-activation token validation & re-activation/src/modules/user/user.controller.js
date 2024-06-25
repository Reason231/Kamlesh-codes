const userService = require('../../modules/user/user.service')

class UserController {
  userCreate = async (request, response,next) => {
    
    try{
    
      const data= await userService.transformUserCreate(request)        // here it sends the request to the user.service.js
      const user=await userService.storeUser(data)                      // 3rd step i.e calling the user.service code

    // Sending email of day16 i.e notification
    await userService.sendActivationEMail({to:user.email, name: user.name, token: user.actvivationToken})


    response.json({
      result: {                 // 4th step
        _id:user._id,           // It is taking the data from the user.service and user.service is taking from the user.model
        name:user.name,
        email:user.email,
        address:user.address,
        actvivationToken:user.activationToken,   // It should be of user.model
        activefor:user.activeFor,
        phone:user.phone
      },
      message: "User created",
      meta: null,
    });
  }
    catch(exception){
       next(exception)
    }
  }


  userRetriveData = (request, response, next) => {
    const query = request.query;
    response.json({
      result: {
        query: query,
      },
      message: "List of all users",
      meta: null,
    });
  }
  userDeleteData = (request, response) => {
    const params = request.params;
    response.json({
      result: {
        params: params,
      },
      message: "Your user details is deleted",
      meta: null,
    });
  };
}

const userCtrl = new UserController()
module.exports = userCtrl