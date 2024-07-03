
const { UserTypes } = require('../../config/constants');
const { setPath, uploader } = require('../../middlewares/uploader.middleware');
const {bodyValidator}=require('../../middlewares/validator.middleware');
const { BrandCreateDto } = require('./brand.request');
const brandController = require('./brand.contoller'); // Correct the typo 'contoller' to 'controller'
const checkLogin = require('../../middlewares/auth.middleware');
const allowUser = require("../../middlewares/rbac.middleware");

const brandRouter = require('express').Router()

brandRouter.route("/")
    // Note : brand can only be accessed by the admin user means the person who registered with the admin role
    .post(checkLogin,allowUser([UserTypes.ADMIN]),setPath("/brand"),uploader.single("image"),bodyValidator(BrandCreateDto),brandController.create)
    .get(checkLogin,allowUser([UserTypes.ADMIN]), brandController.index)

brandRouter.route("/:id")
    .get(checkLogin,allowUser([UserTypes.ADMIN]) ,brandController.show)
module.exports = brandRouter; // Fix the typo 'module.export' to 'module.exports'
