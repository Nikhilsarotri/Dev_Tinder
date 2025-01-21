import React from "react";
import Sendinput from "./Sendinput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="  md:min-w-[750px] flex flex-col  ">
      <div className="flex items-center gap-2  bg-sky-500  text-white   rounded-sm px-4 py-2 mb-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6WcpmU6ndh8j4VIpgNu4TJJNflbc3DYL_w&s" />
          </div>
        </div>
        <div className="">
          <div className="flex gap-2 ">
            <p>Nikhil</p>
          </div>
        </div>
      </div>
     <div className="overflow-auto"> <Messages/>
      <Messages/>
    
     </div>
     <Sendinput/>
    </div>
  );
};

export default MessageContainer;
