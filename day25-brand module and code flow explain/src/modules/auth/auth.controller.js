const { GeneralStatus } = require("../../config/constants");
const { randomString } = require("../../utilites/helpers");
const userService = require("../user/user.service");
const authService = require("./auth.service");
const jwt = require("jsonwebtoken");
const bcrypt=require('bcryptjs')

class AuthController {
    activateUser = async (req, res, next) => {
        try {
            const token = req.params.token;
            const user = await authService.validateActivationToken(token);

            // const tokenCreatedAt = user.activeFor.getTime();   // Askthis to siauthService
            const tokenCreatedAt = user.activeFor;
            const today = Date.now();

            if (tokenCreatedAt < today) {
                throw { status: 401, message: "Token expired" };
            }

            user.activationToken = null;
            user.activeFor = null;
            user.status = GeneralStatus.ACTIVE;

            await user.save();

            res.json({
                result: null,
                message: "Your account has been activated successfully. Please login to proceed further.",
                meta: null
            });
        } catch (exception) {
            next(exception);
        }
    };

    resendActivationToken = async (req, res, next) => {
        try {
            const token = req.params.token || null; // corrected variable name 'token'
            const user = await authService.validateActivationToken(token);

            user.activationToken = randomString(100);
            user.activeFor = new Date(Date.now() + (3 * 60 * 60 * 1000));

            await user.save();

            // Sending re-activation email
            await userService.sendActivationEmail({
                to: user.email,
                name: user.name,
                token: user.activationToken,
                sub: "Re-activate your account"
            });

            res.json({
                result: null,
                message: "Activation token resent successfully.",
                meta: null
            });
        } catch (exception) {
            console.log("Auth.controller => resendActivationToken => Error", exception);
            next(exception);
        }
    };

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const userExists = await userService.getSingleUserByFilter({ email: email });  // it reads the db and provides email

            if (!userExists) {
                throw { status: 400, message: "Invalid credentials provided" };  // If the email doesn't exits in db
            }

            if (userExists && userExists.status === GeneralStatus.ACTIVE) {
                if (bcrypt.compareSync(password, userExists.password)) {    // first argument reprents the password that is stored in db while registering and second represnets the pw of now while logging
                    const token = jwt.sign({
                        sub: userExists._id,
                        type: "bearer"    // it can be "refresh" or "access"
                    }, process.env.JWT_SECRET, {
                        expiresIn: "3h"   // the jwt login token expiry time. It is used for short refrehment of token means if we only used this the user has to login again and again after 3hrs
                    });

                    const refreshToken = jwt.sign({
                        sub: userExists._id,
                        type: "bearer" 
                    }, process.env.JWT_SECRET, {
                        expiresIn: "1day"  // the login token expiry time . It is used for long-term refreshment
                    });

                    // Day24
                    // Pat table will be populate if the userLogin 
                    await authService.populatePAT(userExists._id,{token,refreshToken})

                    res.json({           // the response we get if we put the correct email and pw
                        result: {
                            userDetail: {
                                _id: userExists._id,
                                name: userExists.name,
                                email: userExists.email,
                                role: userExists.role,
                                image: userExists.image
                            }
                        },
                        token: {
                            access: token,
                            refresh: refreshToken
                        },
                        message: "You have successfully logged in.",
                        meta: null
                    });
                } else {
                    throw { status: 400, message: "Credentials don't match" };
                }
            } else {
                throw { status: 400, message: "User not activated" };
            }
        } catch (exception) {
            next(exception);
        }

    };
        // day 23  i.e step 1 codes
      getLoggedInUser = async (req,res,next)=>{
        try{
            res.json({
                result:req.authUser,   // Mathi ko custom key authUser
                meta:null,
                message:"Your profile"
            })
        }
        catch(exception){
            next(exception)
        }
      }  

      // logout day 24
      logout =async(req,res,next)=>{
        try{
            const authUser=req.authUser;
            const currentPat=req.currentsession;

            const query = req.query.logout || null
            if(query === "all"){
                // logout from all sessions
                await authService.deletePAT({
                    userId:authUser._id       // Yesle chai user ma vako saab token lai delete gardincha
                })
            }
            else{
                // logout from the current session or token
                await authService.deletePAT({
                    _id:currentPat._id      // Yesle chai aaafu lea login gareko token lai matrai delete
                })
            }
            res.json({
                result:null,
                message:"Logged out successfully",
                meta:null
            })
        }
        catch(exception){
            next(exception)
        }
      }
}

module.exports = new AuthController();
