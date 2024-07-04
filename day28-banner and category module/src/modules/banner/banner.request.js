const Joi=require("joi");

const BannerCreateDto=Joi.object({
    name:Joi.string().min(2).max(10).required(),
    status:Joi.string().regex(/^(active|inactive)$/).required(),
    // link:Joi.string().url(),
    image:Joi.string()
})

module.exports={
    BannerCreateDto
}