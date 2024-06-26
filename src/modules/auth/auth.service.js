const userService=require('../user/user.service')
const mailSvc=require('../../service/mail.service')
class AuthService{
    // we take the second one repeated code from auth.controller ko resendActivation bata
    validateActivationToken=async (token)=>{
        try{
            if(!token){
                throw{status:400, message:"Token required"}    // this ensures that the user has provided the token in the db
            }

            const user=await userService.getSingleUserByFilter({    // Yesle chai manche lea lekheko token db ma store vayera ya dincha
                activationToken:token  
            })

            if(!user){          // yesle chai yedi manche lea token hami lea email ma pathako nahelera aarkoi token halyo vane errror pathauni
                throw {status:400,message:"Token not found or broken or expired"}    
            }
            return user         // We returned the user cause it is required in another file.
        }
        catch(exception){
            console.log("Auth service => validateActivationToken=>Error",exception)
            throw exception
        }
    }
}

module.exports=new AuthService()
