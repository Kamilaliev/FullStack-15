import { config } from "dotenv";
import {connect} from "mongoose"

config()
connect(process.env.DB_Password)
.then(()=>{
    console.log("connected");
    
})
.catch((err)=>{
    console.log(err,"Error");
    
})