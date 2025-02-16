// import React, { useEffect, useRef } from "react";
// import useGetmessages from "../hooks/getmessages";
// import { useSelector } from "react-redux";

// const Messages = () => {
//   useGetmessages();
//   const scroll= useRef()

//   // Safely access data or default to an empty array
//   const messages = useSelector((store) => store.messages?.messages?.data || []);
//    const selecteduser=useSelector((store)=>store?.chatuser)
//    const authuser= useSelector((store)=>store.user)
//    console.log(authuser,"login user")
//   console.log(messages, "here is messages");

//   useEffect(()=>{
// scroll.current.scrollIntoView({behavior:"smooth"})


//   },[messages])

//   if (!messages.length) {
//     return <p>No messages found.</p>; 
//   }

//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       {messages.map((message) => (
//         <div key={message._id}>
//           <div ref={scroll} className="chat chat-end">
//             <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="User avatar"
//                   src={selecteduser?.image_url}
//                 />
//               </div>
//             </div>
//             <div className="chat-header">
//               <time className="text-xs opacity-50">
//                 {new Date(message.createdAt).toLocaleTimeString()}
//               </time>
//             </div>
//             <div className="chat-bubble">{message.content}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Messages;




import React, { useEffect, useRef, useState } from "react";
import useGetmessages from "../hooks/getmessages";
import useGetRealtimeMessages from "../hooks/useGetReltimemessgehook"
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { Base_Url } from "../../constants";

const Messages = () => {
  useGetmessages();
  useGetRealtimeMessages();
  const scroll = useRef();

  const messages = useSelector((store) => store.messages?.messages?.data || []);
  const selecteduser = useSelector((store) => store?.chatuser);
  const authuser = useSelector((store) => store.user);
 
  console.log(authuser, "login user");
  console.log(messages, "here is messages");
//implementing web sockets;




  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // if (!messages.length) {
  //   return <p>No messages found.</p>;
  // }

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages&&messages.map((message) => (
        <div key={message._id}>
          {console.log(message,"here i message detals")}
          <div className={`chat ${authuser._id === String(message.sender) ? "chat-end" : "chat-start"}`}>
          <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={authuser._id === String(message.sender) ? authuser.image_url : selecteduser?.image_url}
                />
              </div>
            </div>
            <div className="chat-header">
              <time className="text-xs opacity-50">
                {new Date(message.createdAt).toLocaleTimeString()}
              </time>
            </div>
            <div className="chat-bubble">{message.content}</div>
          </div>
        </div>
      ))}
      <div ref={scroll} /> {/* Scroll to this div */}
    </div>
  );
};

export default Messages;
