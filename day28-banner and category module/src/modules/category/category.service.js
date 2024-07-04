
const CategoryModel = require('./category.model')
class CategoryService {
    store = async (data) =>{
        try{
            const category = new CategoryModel(data)
            return await category.save()
        }
        catch(exception){
            console.log("CategoryService => Store => Exception", exception)
            throw exception
        }
    }

    // day 26
    listAllData = async ({limit=10, skip=1, sort={_id:"desc"}, filter={}}) =>{
        try{
            const data=await CategoryModel.find(filter)
            .populate("createdBy", ["_id", "name", "email", "role"])  // Yesle chai createdBy table ko id name email ra role dincha
            .sort(sort)
            .skip(skip)
            .limit(limit)

            const count = await CategoryModel.countDocuments(filter)  // Db ma vako category haru lai count garcha 
            return {count,data}
        }
        catch(exception){
            console.log("CategoryService | listAllData | exception", exception)
            throw exception
        }
    }

    getSingleDataByFilter=async(filter)=>{
        try{
            const data=await CategoryModel.findOne(filter)  // it gets all the data from db
            .populate("createdBy" , ["_id","name","email","role"])
            return data
        }
        catch(exception){
            console.log("CategoryService | getSingleDataByFilter | exception", exception)
            throw exception
        }
    }
    
    updateById=async(id,data)=>{
        try{
            // const response= await CategoryModel.findByIdAndUpdate(id, {$set:data}, {new:true})    It returns the new updated data 
            const response= await CategoryModel.findByIdAndUpdate(id, {$set:data})                   // This data contains the updated data
            return response
        }
        catch(exception){
            console.log("CategoryService | updateById | exception", exception)
            throw exception
        }
    }
     
    deleteById= async(id)=>{
        try{
            const response= await CategoryModel.findByIdAndDelete(id)
            if(!response){
                throw{status:404,message:"Category doesn't exists"}
            }
            return response
        }
        catch(exception){
            console.log("CategoryService | deleteById | exception", exception)
            throw exception
        }
    }
}

const categorySvc=new CategoryService()
module.exports=categorySvc