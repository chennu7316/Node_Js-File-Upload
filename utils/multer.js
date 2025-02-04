const multer = require('multer');
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();



const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});
const uploadSingleFileToS3 = async (params) => {

    const res = await s3.upload(params).promise()
    return res.Location



}


module.exports = { upload, uploadSingleFileToS3 }
