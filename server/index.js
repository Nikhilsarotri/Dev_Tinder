import express from "express"
import dotenv  from "dotenv"
import connectdb from "./db.js";
import router from "./Routes/userRouter.js";
import  userroute from "./Routes/userRouter.js"
import cookieParser from "cookie-parser";


const app= express();
app.use(express.json())
dotenv.config();
app.use(cookieParser())
const port= process.env.PORT||8001
app.use("/user",userroute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)


})
connectdb();