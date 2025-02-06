const exp=require("express")
const app=exp()
const bodyParser = require('body-parser')

require("dotenv").config()
const fileRoutes=require("./routes/fileuploading.routes")
app.use(bodyParser.json())
app.use(fileRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})