import ConnectionModels from "../Models/connectionModel.js";
import userModels from "../Models/userModel.js";

export const CreateConnection = async (req, res, next) => {
  try {
      const fromUserId= req.user._id
      const toUserId= req.params.id
      const status= req.params.status
      const toUser= await userModels.findById(toUserId)


      const existingConnection= await ConnectionModels.findOne({
        $or:[
          {fromUserId,toUserId},
          {fromUserId:toUserId,toUserId:fromUserId}
        ]
      })
      if(existingConnection){
        return res.status(400).json({message:"Request already sent"})
      }

      if(toUserId== fromUserId){
        return res.status(400).json({message:"invalid request"})

      }
const Connection= await ConnectionModels.create({fromUserId,toUserId,status})
return res.status(200).json({message:req.user.name+" is " +status+" in "+toUser.name,Connection})

  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
