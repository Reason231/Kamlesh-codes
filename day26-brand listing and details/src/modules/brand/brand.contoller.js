const slugify= require('slugify');
const brandSvc = require('./brand.service');
class BrandController{

    /**
     * This function is used to create the brand detail.
     * Only Admin user can create a brand
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     * @param {Express.next} next 
     */
    create= async (req,res,next)=>{
     try{
        const data=req.body;
        if(req.file){
            data.image=req.file.filename
        }

        // slug
        data.slug = slugify(data.name, {
            lower:true     // It makes this APPLE => apple
        })
        data.createdBy = req.authUser._id
        const brand= await brandSvc.store(data)
        res.json({
            result:brand,
            message:"Brand Created successfully",
            meta:null
        })
     }

     catch(exception){
        console.log("BrandController | create | exception" , exception)
        next(exception)   // It sends to the express config
     }
    }

    // day 26
    // For reading like showing all the list of brands
     index =  async (req,res,next)=>{
        try{
            // pagination  -> It is the principle of loadmore button in website
            const page= +req.query.page || 1
            const limit= +req.query.limit || 10
            const skip = (page - 1) * limit

            // sorting
            const sorting = {_id:desc}   // It gives the latest list. cause id is always incremental so if the latest list value is 21 if we make descending so the latest will come at top

            // search / filter
            let filter={}

            if (req.query.search){
                filter={
                    $or:[
                        {name: new RegExp(req.query.search, "i")},  // i represents the case insesitive. 
                        {status: new RegExp(req.query.search, "i")}  // it search the brand by title(brand name) or brandStatus like apple brand => it gives apple brand
                    ]
                }
            }

            const {data,count}= await brandSvc.listAllData ({    // It gets the value from brand.service
                limit:limit,
                skip:skip,
                sort:sorting,
                filter:filter
            })
            res.json({
                result:data,
                message:"Brand list",
                meta:{
                    currentPage:page,
                    total: count,
                    limit:limit,
                    totalPages:Math.ceil(count/limit)  // It shows how many pagination is done. means kati oota data lai chai segregation garyo. for eg: totalbrand/limits= paginationBrand
                }
            })
        }
        catch(exception){
            next(exception)
        }
     }

    // // To give details of brand in order to update the brand
        show = async (req,res,next)=>{
            try{
        const id=req.params.id     // It takes the url ko id for eg: brand/123 <= id
        const  detail = await brandSvc.getSingleDataByFilter({
            _id:id    // It puts the id value of url to the db _id
        })

        if(!detail){
            throw{status:404,message:"Brand not found"}
        }

        res.json({
            result:detail,
            message:"Brand Detail",
            meta:null
        })
    }
    catch(exception){
        next(exception)
    }
        }

        // It updates the details
        update = (req,res,next)=>{

        }

    // delele = (req,res,next)=>{

    // }
}

module.exports=new BrandController()