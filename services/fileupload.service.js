
const AWS = require('aws-sdk');
const { uploadSingleFileToS3 } = require("../utils/multer")

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

exports.fileUpload = async (data) => {
    try {
        var result=[]
        const finalResult= await Promise.all(data.map(async (item)=>{
            const params = {
                Bucket: process.env.bucket_name,
                Key: item.originalname,
                Body: item.buffer,
            };
    
            const res = await uploadSingleFileToS3(params)
            return {key:item.originalname,url:res}
        })
    )
        
    return finalResult
       

        

    } catch (error) {

        throw new Error(error.message)

    }
}
