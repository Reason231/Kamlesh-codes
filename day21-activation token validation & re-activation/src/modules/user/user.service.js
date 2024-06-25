require('dotenv').config()
const bcrypt=require('bcryptjs')
const mailSvc=require('../../service/mail.service')
const {randomString}=require('../../utilites/helpers')
const UserModel=require('./user.model')   

class UserService{

    transformUserCreate = async (request) =>{            // it contains the request of user.controller
    // Data mapping
    const data=request.body;
    if(request.file){
      data.image=request.file.filename
    }

    // password encrypt
    data.password=await bcrypt.hashSync(data.password,10)

    // user account manupulating
    data.status="inactive"                                // for the first time when we create account, the account is inactive
    data.activationToken=randomString(100)                // activationToken is the code of individual account to verify account, randomString taken from helper
    data.activeFor= new Date(Date.now() + 3*60*60*1000)    // Today's data + 3 hours in millisecond
    return data                                           // For returing the data to the user.controller.js
    }

    // day 16 
    sendActivationEMail= async({to,name,token,sub="Activate you account"})=>{
      try{
        await mailSvc.sendEmail({
          to: to,                                            // postman ko playload ko
          subject:sub,
          message: `
            <p> Dear ${name}, </p>   
            <p> Your account has beeen registered succesfully</p>
            <p> Please click on the link below or copy paste the url in the breowser for further action </p>
            <a href="${process.env.FRONTEND_URL}/activate/${token}">
                ${process.env.FRONTEND_URL}/activate/${token}
            </a>
            <p> ------------------------------------------------------------------------------</p>
            <p> Regards, </p>
            <p> System admin </p>
            <p> ${process.env.STMP_FROM} </p>
            <p> 
                <small>
                  <em> Please dont reply to this email </em>
                  </small>
            </p>
          `
        })
      }
      catch(exception){
        console.log(exception)
      }
    }

    // It is used to store the data in Mmongodb
    storeUser=async (data)=>{             // It takes the data of upper one 
      try{
        const user=new UserModel(data)           // Yesle yo file ko character ra user.model ko file ko character haru binding garcha . for eg: This file has name and the model has name too
        return await user.save()                   // insert or update . It will insert it
      }
      catch(exception){
        throw exception
      }
    }

    getSingleUserByFilter= async()=>{
      try{
        // it is used to get a user data by filter 
        const user=await UserModel.findOne(filter,{password:0})            // password chai nalini aa. ni yesle chai user ko data haru liyo from database except password
        return user
      }
      catch(exception){
        throw exception
      }
    }
  }
    
      

module.exports=new UserService()