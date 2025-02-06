
const AWS = require('aws-sdk');
const { uploadSingleFileToS3 } = require("../utils/multer")
const config=require("../config/config")
const  uuidv4 =require('uuid');


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
exports.addData=async(data)=>{
    try{
        console.log(data)
        const db=new AWS.DynamoDB.DocumentClient()
        data.id=await uuidv4.v4()
        console.log(data)
        const params={
            TableName:"user_data",
            Item:data
        }
        const addItem=await db.put(params).promise()

    }catch(error){
        throw new Error(error.message)

    }
}
exports.getItems=async()=>{
    try{

        const db=new AWS.DynamoDB.DocumentClient()
        const params={
            TableName:"user_data",
        }
        const result=await db.scan(params).promise()
        return result


    }catch(error){
        throw new Error(error.message)


    }
}
exports.getItem=async(id)=>{
    try{

        const db=new AWS.DynamoDB.DocumentClient()
        const params={
            TableName:"user_data",
            Key:{
                id:id
            }
        }
        const result=await db.get(params).promise()
        return result


    }catch(error){
        throw new Error(error.message)


    }
}