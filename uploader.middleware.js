const  multer=require("multer")     // multer module is used to uplaod the files
const fs=require('fs')              // fs is used to create the folder in public that is upload folder



const mystorage=multer.diskStorage({
    destination:(req,file,callback)=>{                       // This is first step of uplaoding which sets the location of uploading files
          const path="./public/uploads"+req.uploadPath       // here we just define the path and req.uplaodpath is of below
          if (!fs.existsSync(path)) {                        // if upload folder exits then it won't create new folder

             // creating directory
             fs.mkdirSync(path,{recursive:true})             // it ceate directory i.e folder

          }

          callback(null,path)                                // null ko satta ma error pani huna sakcha if error occurs 
     },

    // second step that is naming file to a uniquenes
     filename: (req,file,callback)=>{                // file represnts the file that we have uploaded and filename is the name of file which we uplaoded   
                                                     // file name should always be unique so that if we millions people upload file under same name so it won't get replaced

        const ext=file.originalname.splite(".").pop()       // ext represnts the extensionn which should be store in this variable because we want to filename unique but ext same

        const random=Math.ceil((Math.random()) * 99999)     // it gives the value between 0 to 99999

        const filename=Date.now()+"--"+random+"."+ext
        
        callback(null,filename)
     }
})



const uploader=multer({
    storage:mystorage,
    fileFilter:(req,gile,callback)=>{             // third step to upload only image file
        const ext=file.originalname.splite(".").pop()
        const allowed=['jpg','jpeg','png','gif','svg','webp','bmp']

        if(allowed.includes(ext.toLowerCase())){
            callback(null,true)
        }
        else{
            callback({stauts:400,message:"File extension should be correct"})
        }
    },
    limits:{
        fileSize:3000000           // the file size should be under 3mb
    }
})



// We create function and path as callback and in the function we return another fucntion.
const setPath=(path)=>{                    // here we setup the path file and set the destination. We receive url i.e user from userRouter
    return (req,res,next)=>{
        req.uploadPath=path;
        next()
    }
}
module.exports={uploader,setPath}
                                                                                                                           