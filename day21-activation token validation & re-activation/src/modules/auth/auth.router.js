const router=require('express').Router()
const {setPath,uploader}=require('../../middlewares/uploader.middleware')
const {bodyValidator}=require('../../middlewares/validator.middleware')
const {userCreateDto}=require('../user/user.request')
const userCtrl=require('../user/user.controller')
const AuthController = require('./auth.controller')


router.post("/register",setPath('user'),uploader.single('image'),bodyValidator(userCreateDto),userCtrl.userCreate)  // postman ma /auth/register

// activation token process
router.get("./activate/:token",AuthController.activateUser)  // :token ma chai hami lea response ma pako token halni

// resend activationToken process
router.get("./resend-token/:token",AuthController.resendActivationToken)


module.exports=router   