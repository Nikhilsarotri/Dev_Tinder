import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import axios from "axios";
import { Base_Url } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../utilis/messagesSlice";

const Sendinput = () => {
  const [content, setSendmessage] = useState("");
  const dispatch = useDispatch();
  const selecteduser = useSelector((store) => store.chatuser);
const messages = useSelector((store) => store?.messages?.messages?.data || []);

  const Onsubmithandler = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      console.error("Message content is empty");
      return;
    }

    try {
      const res = await axios.post(
        `${Base_Url}/message/send-message/${selecteduser?._id}`,
        { content },
        { withCredentials: true }
      );

      const newMessage = res?.data?.new_messagee;
      

      if (newMessage) {
        dispatch(setMessages({data:[...messages, newMessage]})); // Append new message
        
        setSendmessage(""); // Clear the input field
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <form onSubmit={Onsubmithandler} className="px-4 my-2">
      <div className="w-full relative">
        <input
          value={content}
          onChange={(e) => setSendmessage(e.target.value)}
          type="text"
          placeholder="Write your message"
          className="border border-sky-400 bg-slate-50 rounded-lg w-full block text-black p-2"
        />
        <button type="submit" className="absolute flex items-center inset-y-0 end-0 pr-4">
          <IoSendSharp />
        </button>
      </div>
    </form>
  );
};

export default Sendinput;






// import React, { useState } from "react";
// import { IoSendSharp } from "react-icons/io5";
// import axios from "axios";
// import { Base_Url } from "../../constants";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from "../../utilis/messagesSlice";

// const Sendinput = () => {
//   const [content, setSendmessage] = useState("");
//   const dispatch = useDispatch();
//   const selecteduser = useSelector((store) => store.chatuser);
//   const messages = useSelector((store) => store.messages?.data || []); // Ensure it's always an array

//   console.log(messages, "here is messages");

//   const Onsubmithandler = async (e) => {
//     e.preventDefault();

//     if (!content.trim()) {
//       console.error("Message content is empty");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `${Base_Url}/message/send-message/${selecteduser?._id}`,
//         { content },
//         { withCredentials: true }
//       );

//       const newMessage = res?.data?.new_messagee;
//       console.log("New message:", newMessage);

//       if (newMessage) {
//         dispatch(setMessages({
//           message: "succesfully get messages",
//           data: [...messages, newMessage] // Append new message while keeping previous ones
//         }));
//         setSendmessage(""); // Clear input field
//       }
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <form onSubmit={Onsubmithandler} className="px-4 my-2">
//       <div className="w-full relative">
//         <input
//           value={content}
//           onChange={(e) => setSendmessage(e.target.value)}
//           type="text"
//           placeholder="Write your message"
//           className="border border-sky-400 bg-slate-50 rounded-lg w-full block text-black p-2"
//         />
//         <button type="submit" className="absolute flex items-center inset-y-0 end-0 pr-4">
//           <IoSendSharp />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Sendinput;
