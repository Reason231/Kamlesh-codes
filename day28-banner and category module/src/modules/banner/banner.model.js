const mongoose=require("mongoose")
const {GeneralStatus}=require('../../config/constants')
const BannerSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true,
        min:2,
        max:15
    },
    link:{
        type:String,
        required:false,
    },
    image:String,
    status:{
        type:String,
        enum: [...Object.values(GeneralStatus)],
        default:GeneralStatus.INACTIVE
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        default:null
    }

},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true
})

const BannerModel=mongoose.model("Banner",BannerSchema)

module.exports=BannerModel