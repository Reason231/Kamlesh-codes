const userRouter = require("express").Router();
const userCtrl=require("./user.controller")           // It imports the logical code from user.controller.file
const checklogin=require("../../middlewares/auth.middleware")
const allowUser=require("../../middlewares/rbac.middleware")
const {setPath,uploader}=require("../../middlewares/uploader.middleware");
const { userCreateDto } = require("./user.request");
const {bodyValidator} = require("../../middlewares/validator.middleware")


// userRouter.use(checklogin);                          // the checklogin is passed to all the down routes that is .post(checklogin,(req,res) . Without the need of writing again and again


userRouter.route("/")                                  
  .post(checklogin,allowUser, setPath("/user"),uploader.single('image'),bodyValidator(userCreateDto),userCtrl.userCreate)     // schema will contain the userCreatedto values 
  .get(userCtrl.userRetriveData)                            



userRouter.route("/:id")
  .get((request, response) => {
    const params = request.params;

    response.json({
      result: {
        params: params,
      },
      message: "Details of all users",
      meta: null,
    });
  })

  .put((request, response) => {
    const params = request.params;
    response.json({
      result: {
        params: params,
      },
      message: "Updated user details",
      meta: null,
    });
  })

  .delete(userCtrl.userDeleteData)

module.exports = userRouter;
