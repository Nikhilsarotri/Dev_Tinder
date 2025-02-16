import {Server} from "socket.io"
import http from "http"
import express from "express";


const app= express();
const server=http.createServer(app);
const io= new Server(server,{
cors:{

origin:["http://localhost:5173"],
methods:['GET','POST']

}



})


export const getRecieverSocketId=(reciever_id)=>{
    
    return userSocketMap[reciever_id]




}






const userSocketMap={}



io.on("connection",(socket)=>{

    console.log("user connected",socket.id)



    const userId= socket.handshake.query.userId

    if(userId!==undefined){
userSocketMap[userId]=socket.id
    }
    io.emit('getonlineUsers',Object.keys(userSocketMap))


socket.on('disconnect',()=>{
console.log("user disconnected",socket.id)
delete userSocketMap[userId]
io.emit('getonlineUsers',Object.keys(userSocketMap))

})


})
export {app,io,server}