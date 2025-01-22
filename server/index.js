import express from "express"
import dotenv  from "dotenv"
import connectdb from "./db.js";
import router from "./Routes/userRouter.js";
import  userroute from "./Routes/userRouter.js"
import connectionroute from "./Routes/connectionRouter.js"
import messageRoute from "./Routes/messageRoutes.js"
import cookieParser from "cookie-parser";
import cors from "cors"


const app= express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json())
dotenv.config();
app.use(cookieParser())
const port= process.env.PORT||8001
app.use("/user",userroute)
app.use("/connections",connectionroute)
app.use("/message",messageRoute)



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)


})
connectdb();