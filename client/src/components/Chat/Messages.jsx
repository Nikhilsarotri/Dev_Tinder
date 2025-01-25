import React from "react";
import useGetmessages from "../hooks/getmessages";
import { useSelector } from "react-redux";

const Messages = () => {
  useGetmessages();

  // Safely access data or default to an empty array
  const messages = useSelector((store) => store.messages?.messages?.data || []);
   const selecteduser=useSelector((store)=>store?.chatuser)
  console.log(messages, "here is messages");

  if (!messages.length) {
    return <p>No messages found.</p>; // Render a fallback UI for no messages
  }

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message) => (
        <div key={message._id}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={selecteduser?.image_url}
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
    </div>
  );
};

export default Messages;
