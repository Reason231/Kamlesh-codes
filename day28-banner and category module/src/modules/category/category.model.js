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
    status:{
        type:String,
        enum: [...Object.values(GeneralStatus)],
        default:GeneralStatus.INACTIVE
    },
    parentID:{
        type:mongoose.Types.ObjectId,
        ref:"Category",                               // should be capital 
        default:null
    },
    image:String,
    brands:[{
        type:mongoose.Types.ObjectId,
        ref:"Brand",
        default:null                       // should be capital and Ensure the reference matches the model name. Means in the brand.model it should be brand model name
    }],
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

const CategoryModel=mongoose.model("Category",CategorySchema)

module.exports=CategoryModel