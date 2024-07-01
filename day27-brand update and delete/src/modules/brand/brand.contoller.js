const slugify = require("slugify");
const brandSvc = require("./brand.service");
const {deleteFile}=require('../../utilites/helpers')
class BrandController {
  /**
   * This function is used to create the brand detail.
   * Only Admin user can create a brand
   * @param {Express.Request} req
   * @param {Express.Response} res
   * @param {Express.next} next
   */

  #id;
  #brand
  create = async (req, res, next) => {
    try {
      const data = req.body;
      if (req.file) {
        data.image = req.file.filename;
      }

      // slug
      data.slug = slugify(data.name, {
        lower: true, // It makes this APPLE => apple
      });
      data.createdBy = req.authUser._id;
      const brand = await brandSvc.store(data);
      res.json({
        result: brand,
        message: "Brand Created successfully",
        meta: null,
      });
    } catch (exception) {
      console.log("BrandController | create | exception", exception);
      next(exception); // It sends to the express config
    }
  };

  // day 26
  // For reading like showing all the list of brands
  index = async (req, res, next) => {
    try {
      // pagination  -> It is the principle of loadmore button in website
      const page = +req.query.page || 1;
      const limit = +req.query.limit || 10;
      const skip = (page - 1) * limit;

      // sorting
      const sorting = { _id: desc }; // It gives the latest list. cause id is always incremental so if the latest list value is 21 if we make descending so the latest will come at top

      // search / filter
      let filter = {};

      if (req.query.search) {
        filter = {
          $or: [
            { name: new RegExp(req.query.search, "i") }, // i represents the case insesitive.
            { status: new RegExp(req.query.search, "i") }, // it search the brand by title(brand name) or brandStatus like apple brand => it gives apple brand
          ],
        };
      }

      const { data, count } = await brandSvc.listAllData({
        // It gets the value from brand.service
        limit: limit,
        skip: skip,
        sort: sorting,
        filter: filter,
      });
      res.json({
        result: data,
        message: "Brand list",
        meta: {
          currentPage: page,
          total: count,
          limit: limit,
          totalPages: Math.ceil(count / limit), // It shows how many pagination is done. means kati oota data lai chai segregation garyo. for eg: totalbrand/limits= paginationBrand
        },
      });
    } catch (exception) {
      next(exception);
    }
  };


  #validateId= async (req,)=>{
    try{
        this.#id=req.params.id
        this.#brand = await brandSvc.getSingleDataByFilter({
            _id: this.#id, 
          });
    
          if (!this.#brand) {
            throw { status: 404, message: "Brand not found" };
          }

    }
    catch(exception){
        throw exception
    }
  }
  // // To give details of brand in order to update the brand
  show = async (req, res, next) => {
    try {
        await this.#validateId(req)

      res.json({
        result: this.#brand,
        message: "Brand Detail",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
 
  // It updates the details
  update = async (req, res, next) => {
    try{
        await this.#validateId(req)

        const data=req.body   // upto here it recieve the old data
        if(req.file){         
            data.image=req.file.filename   // here it updates the new image 
        }

        // updating
        const response=await brandSvc.updateById(this.#id, data)   // data contains the new updated data and response contains the old data

        // It deletes the old data after updating the new data
        if(req.file){
            deleteFile('./public/uploads/brand/ ' + response.image)
        }

        res.json({  
            result:data,     // write response if you want the old data
            message:"Brand updated successfully",
            meta:null
        })
    }


    catch(exception){
        next(exception)
    }
  };

  delete = async (req,res,next)=>{
    try{
        await this.#validateId(req)

        // 
        const response=await brandSvc.deleteById(this.#id)
        if(response.image){
            deleteFile('./public/uploads/brand' + response.image)
        }

        res.json({
            result:null,
            message:"Brand deleted successfully",
            meta:null
        })
    }
    catch(exception){
        next(exception)
    }
  }

  getBySlug=async(req,res,next)=>{
    try{
        const slug=req.params.slug
        const brand = await brandSvc.getSingleDataByFilter({
            slug:slug
        })

        if(!brand){
            throw{status:404,message:"Brand doesn't exits"}
        }

        res.json({
            result:{
                detail:brand,
                product:null
            },
            meta:{
                total:0,
                currentPage:1,
                limit:15,
                totalPage:1
            },
            message:"Brand detail with product"
        })
    }
    catch(exception){
        next(exception)
    }
  }
}

module.exports = new BrandController();
