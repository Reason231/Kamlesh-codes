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
}

const brandSvc=new BrandService()
module.exports=brandSvc