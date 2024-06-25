const { deleteFile } = require("../utilites/helpers")

const  bodyValidator=(schema)=>{
    return async (request,response,next)=>{
        try{
            const data=request.body

            if (request.file){
                data[request.file.fieldname]=request.file.filename         // write file cause it is single file and write files for array(multi)
            }

            await schema.validateAsync(data,{abortEarly:false})            // if there is multiple validation failed then all the validation failed will be thrwon due to use of false 
            next()
        }

        // error handling of validation
        catch(exception){
            const detail={};                                                // we first initalize the detail cause the error has always detail object in it
            
            // deleting file
            console.log(request.file)                                     // here we gets the information of our file
            if (request.file){
                deleteFile("./"+request.file.path)                        // here we delete the single file which is uplaoded after the failed validation
            
            }else if(request.files){                                      // here we delete the multiple files which is uplaoded multiple files
                request.files.map((file)=>{
                    deleteFile("./"+file.path)
                })
            }
            
            
            exception.details.map((error)=>{
                console.log(error)
                detail[error.context.label]=error.message                 // yesma chai detail ko bhitra array haru chan jasma detail ko bhitra error ra error ko bhitra context ra context ko bhitra label lai liyeko chau
            })
        
            next({status:422,message:"Validation failed",detail:detail})  // yesle chai express config ko error handling ma value haru pathayo
        }
    }
}

module.exports={bodyValidator}