const router=require("express").Router()
const {upload}=require("../utils/multer")
const fileControoler=require("../controllers/fileupload.controller")
router.post("/upload-single-file",upload.array("files"),fileControoler.singleFileUpload)
router.post("/add-item",fileControoler.addItem)
router.get("/get-items",fileControoler.getItems)
router.get("/get-item/:id",fileControoler.getItem)


module.exports=router