const checklogin = (req, res, next) => {
    // login check code
    next();                                           // it calls next middleware
  }

  module.exports=checklogin