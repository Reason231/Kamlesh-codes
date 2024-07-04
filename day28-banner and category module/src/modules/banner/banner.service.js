const {deleteFile}=require('../../utilites/helpers')
const BannerModel = require('./banner.model')
class BannerService {
    store = async (data) =>{
        try{
            const banner = new BannerModel(data)
            return await banner.save()
        }
        catch(exception){
            console.log("BannerService => Store => Exception", exception)
            throw exception
        }
    }

    // day 26
    listAllData = async ({limit=10, skip=1, sort={_id:"desc"}, filter={}}) =>{
        try{
            const data=await BannerModel.find(filter)
            .populate("createdBy", ["_id", "name", "email", "role"])  // Yesle chai createdBy table ko id name email ra role dincha
            .sort(sort)
            .skip(skip)
            .limit(limit)

            const count = await BannerModel.countDocuments(filter)  // Db ma vako banner haru lai count garcha 
            return {count,data}
        }
        catch(exception){
            console.log("BannerService | listAllData | exception", exception)
            throw exception
        }
    }

    getSingleDataByFilter=async(filter)=>{
        try{
            const data=await BannerModel.findOne(filter)  // it gets all the data from db
            .populate("createdBy" , ["_id","name","email","role"])
            return data
        }
        catch(exception){
            console.log("BannerService | getSingleDataByFilter | exception", exception)
            throw exception
        }
    }
    
    updateById=async(id,data)=>{
        try{
            // const response= await BannerModel.findByIdAndUpdate(id, {$set:data}, {new:true})    It returns the new updated data 
            const response= await BannerModel.findByIdAndUpdate(id, {$set:data})                   // This data contains the updated data
            return response
        }
        catch(exception){
            console.log("BannerService | updateById | exception", exception)
            throw exception
        }
    }
     
    deleteById= async(id)=>{
        try{
            const response= await BannerModel.findByIdAndDelete(id)
            if(!response){
                throw{status:404,message:"Banner doesn't exists"}
            }
            return response
        }
        catch(exception){
            console.log("BannerService | deleteById | exception", exception)
            throw exception
        }
    }
}

const bannerSvc=new BannerService()
module.exports=bannerSvc