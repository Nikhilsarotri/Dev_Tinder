import React, { useEffect } from "react";
import axios from "axios"
import { Base_Url } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../utilis/messagesSlice";

const useGetmessages = () => {
const dispatch= useDispatch()
 const selecteduser = useSelector((store) => store.chatuser);

  useEffect(() => {

    const fetchMessages=async()=>{
    try {
        const res= await axios.get(Base_Url+`/message/get-messages/${selecteduser?._id}`,{withCredentials:true})

console.log(res.data)
dispatch(setMessages(res.data))

    } catch (err) {
      console.log(err.message);
    }
  }

fetchMessages();
},[selecteduser]);
};

export default useGetmessages;
