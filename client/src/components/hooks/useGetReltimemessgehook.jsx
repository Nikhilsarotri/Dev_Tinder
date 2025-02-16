// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { setMessages } from "../../utilis/messagesSlice";

// const useGetRealtimemessagehook=()=>{
//   const socket= useSelector((store=>store?.socket?.socket))
//   const dispatch= useDispatch();
//   const messages = useSelector((store) => store.messages?.messages?.data || []);

//   useEffect(()=>{
// socket.on("new_messagee",(new_messagee)=>{
//     console.log("New message received:", new_messagee);

//     dispatch(setMessages([...messages,new_messagee]))
// })



//   },[socket,setMessages])



// }
// export default useGetRealtimemessagehook;


import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addMessage } from "../../utilis/messagesSlice";
import { useSelector } from "react-redux";

const useGetRealtimeMessages = () => {
    const socket= useSelector((store=>store?.socket?.socket))
    const messages = useSelector((store) => store.messages?.messages?.data || []);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      dispatch(addMessage(newMessage)); // Append the new message
    };

    socket.on("new_messagee", handleNewMessage);

    return () => {
      socket.off("new_messagee", handleNewMessage); // Clean up the listener
    };
  }, [socket,dispatch]);
};
export default useGetRealtimeMessages;