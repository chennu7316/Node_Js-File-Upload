
const fileUploadService=require("../services/fileupload.service")

exports.singleFileUpload=async(req,res,next)=>{
    try{
    console.log(req.files)
    if(!req.files || req.files?.length<1){
        throw new Error("Please provide at least one file",400)
    }
   
    const location=await fileUploadService.fileUpload(req.files)
    res.send({
        status:true,
        result:location
    })
     }catch(error){
        res.status(400).send({status:false,message:error.message})
     }
}