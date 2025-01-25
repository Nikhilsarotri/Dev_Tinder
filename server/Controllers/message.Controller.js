import messageModel from "../Models/messageModel.js";
import userModels from "../Models/userModel.js";

export const sendMessage = async (req, res) => {
  try {
    const sender_id = req.user._id;
    const reciever_id = req.params.id;
    const { content } = req.body;

    const reciever = await userModels.findById(reciever_id);
    if (sender_id == reciever_id) {
      return res.status(400).json({ message: "invalid attempt" });
    }

    const messagee = await messageModel.create({
      sender: sender_id,
      reciever: reciever_id,
      content,
    });

    return res
      .status(201)
      .json({ message: "message sent sucessfully", messagee });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};




export const getmessage=async(req,res)=>{
try{
     const reciever_id = req.params.id;
     const loginUser = req.user;
     if (!reciever_id) {
      return res.status(400).json({ message: "Reciever ID is required" });
    }
    
    const data= await messageModel.find({  $and: [
        {  sender: loginUser._id },
        {  reciever: reciever_id },
      ],})
    
    console.log(data)
  return res.status(200).json({message:"succesfully get messages",data})
}
catch(err){
    return res.status(400).json(err.message)



}



}