import React from "react";
import Sendinput from "./Sendinput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
      const selecteduser = useSelector((store) => store.chatuser);
      console.log(selecteduser,"here is selected")
    
  return (
    <div className="  md:min-w-[750px] flex flex-col  ">
      <div className="flex items-center gap-2  bg-sky-500  text-white   rounded-sm px-4 py-2 mb-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={selecteduser?.image_url} />
          </div>
        </div>
        <div className="">
          <div className="flex gap-2 ">
            <p>{selecteduser?.name}</p>
          </div>
        </div>
      </div>
     <div className="overflow-auto"> <Messages/>
  
    
     </div>
     <Sendinput/>
    </div>
  );
};

export default MessageContainer;
