import express from "express"
import cors from "cors"
import "./Config/Config.js"
import route from "./route/route.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/dress",route)
app.listen(3000,()=>{
    console.log("listened on 3000");
    
})