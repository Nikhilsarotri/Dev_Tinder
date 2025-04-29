// import React from 'react'
// import Sidebar from './Sidebar';
// import MessageContainer from './MessageContainer';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useState,useEffect } from 'react';
// import io from "socket.io-client";
// import { Base_Url } from '../../constants';
// import { setSocket } from '../../utilis/socketSlice';
// import { setOnlineUsers } from '../../utilis/onlineUserSlice';

// const Chatpage = () => {
//   const authuser = useSelector((store) => store.user);
//   const socket= useSelector((store=>store?.socket?.socket))
//    const dispatch= useDispatch()
// useEffect(()=>{

// if(authuser){
// const socket= io(`${Base_Url}`,{
// query:{

// userId:authuser._id

// }

// })
//  dispatch(setSocket(socket));
// socket.on('getonlineUsers',(OnlineUsers)=>{
// dispatch(setOnlineUsers(OnlineUsers))
// });

// return ()=>socket.close();
// }
// else{
// if(socket){
// socket.close()
// dispatch(setSocket(null));


// }



// }


// },[authuser])







//   return (
//     <div className="flex  justify-center h-screen  ">
//   <div className=" flex  justify-center sm:h-[450px ]   md:-h[780px] my-10 text-black bg-sky-50 bg-clip-padding backdrop-filter backdrop-blur-lg opacity-75 w-full p-6 rounded-lg shadow-lg ">
//     < Sidebar  />
//     <MessageContainer/>
//   </div>
// </div>


    
//   )
// }

// export default Chatpage;










import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { Base_Url } from "../../constants";
import { setSocket } from "../../utilis/socketSlice";
import { setOnlineUsers } from "../../utilis/onlineUserSlice";

const Chatpage = () => {
  const authuser = useSelector((store) => store.user);
  const socket = useSelector((store) => store?.socket?.socket);
  const dispatch = useDispatch();
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    if (authuser) {
      const socket = io(`${Base_Url}`, {
        query: { userId: authuser._id },
      });

      dispatch(setSocket(socket));

      socket.on("getonlineUsers", (OnlineUsers) => {
        dispatch(setOnlineUsers(OnlineUsers));
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authuser]);

  return (
    <div className="flex justify-center  items-center min-h-screen ">
      <div className="flex w-full  sm:h-[90vh] md:h-dvh my-10   sm:p-6 bg-white shadow-lg rounded-lg">
        {/* Sidebar (Always visible on large screens, conditionally on mobile) */}
        <div className={`w-full md:w-1/3   ${showMessages ? "hidden md:block" : "block"}`}>
          <Sidebar onChatSelect={() => setShowMessages(true)} />
        </div>

        {/* Message Container (Only visible when chat is selected on mobile) */}
        <div className={`w-full md:w-2/3 ${showMessages ? "block" : "hidden md:block"}`}>
          <MessageContainer onBack={() => setShowMessages(false)} />
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
