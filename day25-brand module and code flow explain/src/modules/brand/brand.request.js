const Joi=require("joi");

const BrandCreateDto=Joi.object({
    name:Joi.string().min(2).max(10).required(),
    status:Joi.string().regex(/^(active|inactive)$/).required(),
    isFeatured:Joi.boolean().default(false),
    image:Joi.string()
})

module.exports={
    BrandCreateDto
}