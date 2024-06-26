const router=require('express').Router()
const {setPath,uploader}=require('../../middlewares/uploader.middleware')
const {bodyValidator}=require('../../middlewares/validator.middleware')
const {userCreateDto}=require('../user/user.request')
const userCtrl=require('../user/user.controller')
const AuthController = require('./auth.controller')
const { LoginDto } = require('./auth.request')
const authController = require('./auth.controller')
const checklogin = require('../../middlewares/auth.middleware')
const allowUser=require('../../middlewares/rbac.middleware')


router.post("/register",setPath('user'),uploader.single('image'),bodyValidator(userCreateDto),userCtrl.userCreate)  // postman ma /auth/register

// activation token process
router.get("/activate/:token",AuthController.activateUser)  // :token ma chai hami lea response ma pako token halni

// resend activationToken process
router.get("/resend-token/:token",AuthController.resendActivationToken)

// login 
router.post("/login",bodyValidator(LoginDto),authController.login)
// router.get("/me",checklogin , allowUser('admin'),authController.getLoggedInUser)  // We give access of checklogin to all the users so we don't permit this
router.get("/me",checklogin ,authController.getLoggedInUser)


module.exports=router   
