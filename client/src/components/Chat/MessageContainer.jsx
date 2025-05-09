import React from "react";
import Sendinput from "./Sendinput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
      const selecteduser = useSelector((store) => store.chatuser);
      const authuser = useSelector((store) => store.user);
  const onlineUsers = useSelector((store) => store?.onlineUsers);
  console.log(onlineUsers, "onlinnnennen");
  const isOnline = onlineUsers?.includes(selecteduser?._id);
      console.log(selecteduser,"here is selected")
    
  return (
    <>{selecteduser!==null?    <div className="  md:min-w-[750px]  sm:h-screen h-dvh md:h-dvh flex flex-col  flex-1 ">
      <div className="flex items-center gap-2  bg-sky-500  text-white   rounded-sm px-4 py-2 mb-2">
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>

          <div className="w-12 rounded-full">
            <img src={selecteduser?.image_url||"https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"} />
          </div>
        </div>
        
        <div className="">
          <div className="flex gap-2 ">
            <p>{selecteduser?.name}</p>
          </div>
        </div>
      </div>
     <div className=" flex-1 overflow-auto scrollbar- scrollbar-thin scrollbar-thumb-black scrollbar-track-white"> <Messages/>
  
    
     </div>
     <Sendinput/>
    </div>
  :<div className="  md:min-w-[750px] flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Hi, {authuser?.name}</h1>
  <h1 className="text-2xl">Lets start conversation</h1></div>}</>)

};

export default MessageContainer;
