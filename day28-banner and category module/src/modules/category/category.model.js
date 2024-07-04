const mongoose=require("mongoose")
const {GeneralStatus}=require('../../config/constants')
const CategorySchema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true,
        min:2,
    },
    slug:{
        type:String,
        required:true,
        unique:true
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
    },
    parentID:{
        type:mongoose.Types.ObjectId,
        ref:"Category",                               // should be capital 
        default:null
    },
    brands:[{
        type:mongoose.Types.ObjectId,
        ref:"Brands",                               // should be capital 
        default:null
    }]

},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true
})

const CategoryModel=mongoose.model("Category",CategorySchema)

module.exports=CategoryModel