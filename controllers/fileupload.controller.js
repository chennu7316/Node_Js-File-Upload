
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
exports.addItem=async(req,res,next)=>{
    try{
        const data=await fileUploadService.addData(req.body)
        res.send({
            status:true,
            message: "data is added"
        })

    }catch(error){
        res.status(400).send({status:false,message:error.message})

    }
}
exports.getItems=async(req,res,next)=>{
    try{
        const data=await fileUploadService.getItems()
        res.send({
            status:true,
            message: "gets all data",
            data:data
        })

    }catch(error){
        res.status(400).send({status:false,message:error.message})

    }
}

exports.getItem=async(req,res,next)=>{
    try{
        const id=req.params.id
        if(!id){
            throw new Error("id should be required")
        }
        const data=await fileUploadService.getItem(id)
        res.send({
            status:true,
            message: "gets all data",
            data:data
        })

    }catch(error){
        res.status(400).send({status:false,message:error.message})

    }
}
