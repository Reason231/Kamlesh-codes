require("dotenv").config()
const mongoose=require('mongoose')
const { encodeXText } = require("nodemailer/lib/shared")

mongoose.connect(process.env.MONGODB_URL,{
    dbName:process.env.MONGODB_NAME,
    autoCreate:true,
    autoIndex:true
})
.then(()=>{
    console.log("db server connected successfully ")
})
.catch((exception)=>{
    console.log(exception)
    console.log("Error connecting database Server")
    process.exit(1) //stop your server running process
})