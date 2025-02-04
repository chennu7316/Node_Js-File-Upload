const router=require("express").Router()
const {upload}=require("../utils/multer")
const fileControoler=require("../controllers/fileupload.controller")
router.post("/upload-single-file",upload.array("files"),fileControoler.singleFileUpload)

module.exports=router