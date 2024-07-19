const Joi=require("joi");

const CategoryCreateDto=Joi.object({
    name:Joi.string().min(2).max(20).required(),
    status:Joi.string().regex(/^(active|inactive)$/).required(),
    image:Joi.string(),
    
})

module.exports={
    CategoryCreateDto
}