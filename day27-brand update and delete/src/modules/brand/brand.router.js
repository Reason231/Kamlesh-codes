
const brandRouter = require('express').Router()
const { UserTypes } = require('../../config/constants');
const { setPath, uploader } = require('../../middlewares/uploader.middleware');
const {bodyValidator}=require('../../middlewares/validator.middleware');
const { BrandCreateDto } = require('./brand.request');
const brandController = require('./brand.contoller'); // Correct the typo 'contoller' to 'controller'
const checkLogin = require('../../middlewares/auth.middleware');
const allowUser = require("../../middlewares/rbac.middleware");



brandRouter.route("/")
    // Note : brand can only be accessed by the admin user means the person who registered with the admin role
    // create brand
    .post(checkLogin,allowUser([UserTypes.ADMIN]),setPath("/brand"),uploader.single("image"),bodyValidator(BrandCreateDto),brandController.create)

    // brand listing
    .get(checkLogin,allowUser([UserTypes.ADMIN]), brandController.index)

brandRouter.route("/:id")
    // brand details
    .get(checkLogin,allowUser([UserTypes.ADMIN]) ,brandController.show)
    
    // brand update
    .put(checklogin,allowUser([UserTypes.ADMIN], setPath("/brand"), uploader.single("image"), bodyValidator(BrandCreateDto)), brandController.update)  // here it requires the uplaoder cause we need to change the logo if somebody wants to update it

    // brand delete
    .delete(checklogin, allowUser([UserTypes.ADMIN]), brandController.delete)

brandRouter.get('/:slug/detail' , brandController.getBySlug)  // It is the different route which is required for slug


module.exports = brandRouter; 