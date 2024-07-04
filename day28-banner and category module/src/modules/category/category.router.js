
const brandRouter = require('express').Router()
const { UserTypes } = require('../../config/constants');
const { setPath, uploader } = require('../../middlewares/uploader.middleware');
const {bodyValidator}=require('../../middlewares/validator.middleware');
const { CategoryCreateDto } = require('./category.request');
const categoryController = require('./category.contoller'); // Correct the typo 'contoller' to 'controller'
const checkLogin = require('../../middlewares/auth.middleware');
const allowUser = require("../../middlewares/rbac.middleware");



categoryRouter.route("/")
    // Note : category can only be accessed by the admin user means the person who registered with the admin role
    // create category
    .post(checkLogin,allowUser([UserTypes.ADMIN]),setPath("/category"),uploader.single("image"),bodyValidator(CategoryCreateDto),categoryController.create)

    // category listing
    .get(checkLogin,allowUser([UserTypes.ADMIN]), categoryController.index)

categoryRouter.route("/:id")
    // category details
    .get(checkLogin,allowUser([UserTypes.ADMIN]) ,categoryController.show)
    
    // category update
    .put(checkLogin,allowUser([UserTypes.ADMIN], setPath("/category"), uploader.single("image"), bodyValidator(CategoryCreateDto)), categoryController.update)  // here it requires the uplaoder cause we need to change the logo if somebody wants to update it

    // category delete
    .delete(checkLogin, allowUser([UserTypes.ADMIN]), categoryController.delete)

categoryRouter.get('/:slug/detail' , categoryController.getBySlug)  // It is the different route which is required for slug


module.exports = categoryRouter; 