// it contains  client ,form and database logic

const Joi=require("joi")

const userCreateDto=Joi.object({
    name:Joi.string().regex(/^[a-zA-Z ]+$/).min(2).max(50).required().messages({
        "string.empty":"name shouldn't be empty",
        "string.min":"Name should be atleast 2 chracter"
    }),                                                                       // it means it should have the text between 2 to 50 and it is required
    email:Joi.string().email().required(),

    password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required().messages({
        "string.pattern.base":"Password should contain the letters,number and special characters",
        "string.empty":"Password shouldn't be empty"
        }),      // imported from web
        
    confirmPassword:Joi.string().equal(Joi.ref('password')).required().messages({
        "any.only":"confirm password is not same to password"
    }),       // it check the input which is same to password or not

    address:Joi.string().empty().optional(),                                  // it doesn't matter if we won't write cause optional
    phone:Joi.string().min(10).max(15),
    image:Joi.string().optional(),
    role:Joi.string().regex(/^(admin|seller|customer)$/).required().messages({     // here we write out of these three
        "string.pattern.base":"Role should be admin or seller or customer"
    })
})

module.exports={
    userCreateDto
}