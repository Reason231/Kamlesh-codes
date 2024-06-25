const router=require("express").Router()            // .Router() helps you to extract only router functionality such as  of .get,.post 
const userRouter=require("../modules/user/user.router")   // here we extract file from user.router
const bannerRouter=require("../modules/banner/banner.router")
const authRouter=require('../modules/auth/auth.router')

router.use("/user",userRouter)  // here we used the variable so that the code can work and url defines the same url for all the routers
router.use("/banner",bannerRouter)
router.use("/auth",authRouter)

module.exports=router
