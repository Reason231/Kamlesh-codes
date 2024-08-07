const BrandModel = require('./brand.model')
class BrandService {
    store = async (data) =>{
        try{
            const brand = new BrandModel(data)
            return await brand.save()
        }
        catch(exception){
            console.log("BrandService => Store => Exception", exception)
            throw exception
        }
    }

    // day 26
    listAllData = async ({limit=10, skip=1, sort={_id:"desc"}, filter={}}) =>{
        try{
            const data=await BrandModel.find(filter)
            .populate("createdBy", ["_id", "name", "email", "role"])  // Yesle chai createdBy table ko id name email ra role dincha
            .sort(sort)
            .skip(skip)
            .limit(limit)

            const count = await BrandModel.countDocuments(filter)  // Db ma vako brand haru lai count garcha 
            return {count,data}
        }
        catch(exception){
            console.log("BrandService | listAllData | exception", exception)
            throw exception
        }
    }

    getSingleDataByFilter=async(filter)=>{
        try{
            const data=await BrandModel.findOne(filter)  // it gets all the data from db
            .populate("createdBy" , ["_id","name","email","role"])
            return data
        }
        catch(exception){
            console.log("BrandService | getSingleDataByFilter | exception", exception)
            throw exception
        }
    }
}

const brandSvc=new BrandService()
module.exports=brandSvc