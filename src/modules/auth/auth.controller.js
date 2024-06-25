const { GeneralStatus } = require("../../config/constants");
const { randomString } = require("../../utilites/helpers");
const userService = require("../user/user.service");
const authService = require("./auth.service");

class AuthController{
    activateUser =async (req,res,next)=>{
        try{
            const token=req.params.token;                                 // auth rotuer ko params ko token leko 
            const user=await authService.validateActivationToken(token)   // Taken from auth.service.js file. 6th step

            // day 20
            // Provides the date in the timestap
            const tokenCreatedAt=user.activeFor.getTime()          // It stores the data of getting the timestamp of when the user became active
            const today=Date.now()                                 // 1st step . // Getting the current timestamp

            // Compares the data which proivdes the expiry
            if(tokenCreatedAt<today){                              // 2nd step
                throw{status:401,message:"Token expired"}
            }

            // activating the account if the token isn't exprired  // 7th step
            user.activationToken=null;
            user.activeFor=null;
            user.status=GeneralStatus.ACTIVE;
            
            await user.save()

            res.json({
                resutl:null,
                message:"Your account has been activated successfully. Please login to further process",
                meta:null
            })
        }
        catch(exception){
            next(exception)
        }
    }

    // Generating the reactivation code if the previous token expired.   
    resendActivationToken = async (req,res,next)=>{                       
        try{
            const params = req.params.token || null
            const user=await authService.validateActivationToken(token)   // Taken from auth.service.js file  3rd step

            // generating the new token
            user.activationToken=randomString(100)                        // 4th step
            user.activeFor=new Date(Date.now()+(3*60*60*1000))

            await user.save()   // It updates cause user already exits in db else it creates the user if it doesn't exits

            // Sending the email for re-activation                        // 5th step
            await userService.sendActivationEMail({
                to:user.email,
                name:user.name,
                token:user.activationToken,
                sub:"Re-activate your account",
            })

        }
        catch(exception){
            console.log("Auth.controller => resendActivationToken => Error",exception)
            next(exception)
        }
    }
}

module.exports=new AuthController()