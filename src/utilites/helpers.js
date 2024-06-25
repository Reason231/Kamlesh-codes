const fs=require("fs")


// It is used to create random strings aplphabet for image name 
const randomString=(length)=>{
    const chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const len=chars.length;
    let random=""
    for (let i=0;i<length;i++){
        const positionnumber=Math.ceil(Math.random()*(len-1));
        random +=chars[positionnumber]
    }
    return random
}

// It is used to delete the file
const deleteFile=(filePath)=>{
    if(fs.existsSync(filePath)){
        fs.unlinkSync(filePath)     // it deletes the file

    }
}


module.exports={randomString,deleteFile}     