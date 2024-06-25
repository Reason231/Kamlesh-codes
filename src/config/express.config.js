const express = require("express")

require('./db.config')

const app=express()
const router=require("../routing/routing.config")       // here we connected the routing files into the router variable
const bannerRouter=require("../routing/routing.config")

// body parsers
app.use(express.json())  // it is must to write the data in postman body

// router mount that is inserting routing folder
app.use(router)     // here we inserted it through calling upper variable
app.use(bannerRouter)


// validation-middleware error handling ko next scope ya aayo
app.use((error,req,res,next)=>{
    let status=error.status || 500
    let message=error.message || "Server error"      // it sends this messages
    let result=error.detail || null
    
    res.status(status).json({                         // this is also required
        result:result,
        meta:null,
        message:message
    })
})


module.exports=app