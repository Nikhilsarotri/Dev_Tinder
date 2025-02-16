import { isObjectIdOrHexString } from "mongoose";
import messageModel from "../Models/messageModel.js";
import userModels from "../Models/userModel.js";
import {io} from '../socket/socket.js'
import { getRecieverSocketId } from "../socket/socket.js";



export const sendMessage = async (req, res) => {
  try {
    const sender_id = req.user?._id; 
    const reciever_id = req.params?.id; 
    const { content } = req.body; 

  
    if (!sender_id) {
      return res.status(400).json({ error: "Sender ID is missing or invalid." });
    }
    if (!reciever_id) {
      return res.status(400).json({ error: "Receiver ID is required." });
    }
    if (!content || content.trim() === "") {
      return res.status(400).json({ error: "Message content is required." });
    }
    if (sender_id === reciever_id) {
      return res.status(400).json({ error: "Cannot send a message to yourself." });
    }

    // Ensure receiver exists
    const reciever = await userModels.findById(reciever_id);
    if (!reciever) {
      return res.status(404).json({ error: "Receiver not found." });
    }

    
    const new_messagee = await messageModel.create({
      sender: sender_id,
      reciever: reciever_id,
      content,
    });




    //socket  

const recieverSocketid=getRecieverSocketId(reciever_id);
console.log(recieverSocketid,"here is reciver socket id")
if(recieverSocketid){

io.to(recieverSocketid).emit("new_messagee",new_messagee)
console.log("Message emitted to receiver:", new_messagee);

}




    return res
      .status(201)
      .json({  new_messagee });
  } catch (err) {
    console.error("Error creating message:", err.message);
    return res.status(400).json({ error: err.message });
  }
};


// export const getmessage=async(req,res)=>{
// try{
//      const reciever_id = req.params.id;
//      const loginUser = req.user;
//      if (!reciever_id) {
//       return res.status(400).json({ message: "Reciever ID is required" });
//     }
    
//     const data= await messageModel.find({  $and: [
//         {  sender: loginUser._id },
//         {  reciever: reciever_id },
//       ],})
    
    
//   return res.status(200).json({data})
// }
// catch(err){
//     return res.status(400).json(err.message)



// }



// }


export const getmessage = async (req, res) => {
  try {
    const reciever_id = req.params.id; 
    const loginUser = req.user; 
    
    
    if (!reciever_id) {
      return res.status(400).json({ message: "Receiver ID is required" });
    }
    
    
    const messages = await messageModel.find({
      $or: [
        { sender: loginUser._id, reciever: reciever_id },
        { sender: reciever_id, reciever: loginUser._id }
      ]
    }).sort({ createdAt: 1 }); 

    return res.status(200).json({ data: messages });
  } catch (err) {
    console.error("Error fetching messages:", err);
    return res.status(500).json({ message: "Failed to fetch messages", error: err.message });
  }
};
