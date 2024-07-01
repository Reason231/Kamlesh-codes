const userService=require('../user/user.service')
const mailSvc=require('../../service/mail.service')
const PatModel = require('./pat.model')
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

    // It populate the pat data in the db
    populatePAT= async(userId,{token,refreshToken}) =>{
        try{
            const pat = new PatModel({
                userId:userId,
                accessToken:token,
                refreshToken:refreshToken
            })
            return await pat.save()
        }
        catch(exception){
            throw exception
        }
    }
    
    // It verify thep pat data store in the db
    getPATDATA = async(filter)=>{
        try{
            const pat=await PatModel.findOne(filter)
            return pat
        }
        catch(exception){
            throw exception
        }
    }

    deletePAT = async(filter)=>{
        try{
            return await PatModel.deleteMany(filter)   // It deletes the pat token
        }
        catch(exception){
            throw exception
        }
    }
}

module.exports=new AuthService()