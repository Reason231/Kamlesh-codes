const allowUser = (req, res, next) => {
    // person check code
     next()                                         // it calls the next middleware
        // next({status:401,message:"Please verify"})     // if an error occurs during allowuser it sends back to the express.config with the response of error
  };

  module.exports=allowUser