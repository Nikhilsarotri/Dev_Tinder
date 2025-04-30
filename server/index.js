








import express from "express";
import dotenv from "dotenv";
import connectdb from "./db.js";
import userroute from "./Routes/userRouter.js";
import connectionroute from "./Routes/connectionRouter.js";
import messageRoute from "./Routes/messageRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js"; 

dotenv.config();
connectdb();
app.use(cors({
    origin: "http://13.61.155.77",  // Replace with your frontend's public IP/domain
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT ;

app.use("/user", userroute);
app.use("/connections", connectionroute);
app.use("/message", messageRoute);

server.listen(port, () => {  
    console.log(`Server is running on port ${port}`);
});
