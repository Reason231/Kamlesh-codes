const slugify= require('slugify')
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

    // For reading like showing all the list of brands
    // index = (req,res,next)=>{

    // }

    // // To give details in order to update the brand
    // show = (req,res,next)=>{

    // }

    // // It updates the details
    // update = (req,res,next)=>{

    // }

    // delele = (req,res,next)=>{

    // }
}

module.exports=new BrandController()
