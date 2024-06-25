const bannerRouter=require("express").Router()
const bannerCtrl=require("./banner.controller")

bannerRouter.route("/")
.post(bannerCtrl.bannerCreate)
.get(bannerCtrl.bannerList)

bannerRouter.route("/:id")
.get(bannerCtrl.bannerDetail)
.put(bannerCtrl.bannerEdit)
.delete(bannerCtrl.bannerDelete)

module.exports=bannerRouter 

// How to make different body data for different https methods