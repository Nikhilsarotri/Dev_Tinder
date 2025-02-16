import React from 'react'
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import io from "socket.io-client";
import { Base_Url } from '../../constants';
import { setSocket } from '../../utilis/socketSlice';
import { setOnlineUsers } from '../../utilis/onlineUserSlice';

const Chatpage = () => {
  const authuser = useSelector((store) => store.user);
  const socket= useSelector((store=>store?.socket?.socket))
   const dispatch= useDispatch()
useEffect(()=>{

if(authuser){
const socket= io(`${Base_Url}`,{
query:{

userId:authuser._id

}

})
 dispatch(setSocket(socket));
socket.on('getonlineUsers',(OnlineUsers)=>{
dispatch(setOnlineUsers(OnlineUsers))
});

return ()=>socket.close();
}
else{
if(socket){
socket.close()
dispatch(setSocket(null));


}



}


},[authuser])







  return (
    <div className="flex  justify-center h-screen  ">
  <div className=" flex  justify-center sm:h-[450px ]   md:-h[780px] my-10 text-black bg-sky-50 bg-clip-padding backdrop-filter backdrop-blur-lg opacity-75 w-full p-6 rounded-lg shadow-lg ">
    <Sidebar/>
    <MessageContainer/>
  </div>
</div>


    
  )
}

export default Chatpage;