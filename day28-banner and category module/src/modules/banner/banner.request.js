const Joi=require("joi");

const BannerCreateDto=Joi.object({
    name:Joi.string().min(2).max(25).required(),
    status:Joi.string().regex(/^(active|inactive)$/).required(),
    image:Joi.string(),
    link:Joi.string().uri(),    // should be uri instea of url
}) 

module.exports={
    BannerCreateDto
}