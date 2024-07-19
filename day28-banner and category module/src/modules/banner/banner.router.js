
const bannerRouter = require('express').Router()
const { UserTypes } = require('../../config/constants');
const { setPath, uploader } = require('../../middlewares/uploader.middleware');
const {bodyValidator}=require('../../middlewares/validator.middleware');
const { BannerCreateDto } = require('./banner.request');
const bannerController = require('./banner.controller'); 
const checkLogin = require('../../middlewares/auth.middleware');
const allowUser = require("../../middlewares/rbac.middleware");



bannerRouter.route("/")
    // Note : banner can only be accessed by the admin user means the person who registered with the admin role
    // create banner
    .post(checkLogin,allowUser([UserTypes.ADMIN]),setPath("/banner"),uploader.single("image"),bodyValidator(BannerCreateDto),bannerController.create)
    
    // banner listing
    .get(checkLogin,allowUser([UserTypes.ADMIN]), bannerController.index)
    
    bannerRouter.route("/:id")
    // banner details
    .get(checkLogin,allowUser([UserTypes.ADMIN]) ,bannerController.show)
    
    // banner update
    .put(checkLogin,allowUser([UserTypes.ADMIN]),setPath("/banner"),uploader.single("image"),bodyValidator(BannerCreateDto),bannerController.update)
      // here it requires the uplaoder cause we need to change the logo if somebody wants to update it

    // banner delete
    .delete(checkLogin, allowUser([UserTypes.ADMIN]), bannerController.delete)



module.exports = bannerRouter;