const mongoose=require('mongoose')
const { UserTypes, GeneralStatus, UserProvider } = require('../../config/constants')

const UserScehma=new mongoose.Schema({
    name :{
        type: String,                           // should be capital cause it is mongodb data type
        min: 2,                                 // database validation
        max:50,
        required:true                                 
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: false,
        default: null                 // short form of this address => address:String,
    },
    role:{
        type:String,
        enum:[...Object.values(UserTypes)] ,       // it takes the values excpet key and returns to an array
        default: UserTypes.CUSTOMER
    },
    status:{
        type:String,
        enum:[...Object.values(GeneralStatus)],
        default:GeneralStatus.INACTIVE
    },
    phone:[String],                               // It accepts the multiple phone number
    activationToken:String,
    activeFor:String,
    userProvider:{
        type:String,
        enum: [...Object.values(UserProvider)],
        default: UserProvider.CUSTOM
    },
    userProviderId:String,
    forgetToken:String,
    forgotTokenFor:Date,
    image:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",                               // should be capital 
        default:null
    }
},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true
})

// Model Name => Singular form
// collection Name => PluralForm of model name
const UserModel=mongoose.model("User", UserScehma) 

module.exports=UserModel