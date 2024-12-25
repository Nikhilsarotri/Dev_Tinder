import ConnectionModels from "../Models/connectionModel.js";
import userModels from "../Models/userModel.js";

export const CreateConnection = async (req, res, next) => {
  try {
    const fromUserId = req.user._id;
    const toUserId = req.params.id;
    const status = req.params.status;

    const allowedStatus = ["ignore", "interested"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ message: "invalid status" });
    }

    const toUser = await userModels.findById(toUserId);

    const existingConnection = await ConnectionModels.findOne({
      $or: [
        { fromUserId, toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    });
    if (existingConnection) {
      return res.status(400).json({ message: "Request already sent" });
    }

    if (toUserId == fromUserId) {
      return res.status(400).json({ message: "invalid request" });
    }
    const Connection = await ConnectionModels.create({
      fromUserId,
      toUserId,
      status,
    });
    return res
      .status(200)
      .json({
        message: req.user.name + " is " + status + " in " + toUser.name,
        Connection,
      });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

//_______________________________review Request______________________________

export const reviewRequest = async (req, res, next) => {
  try {
    const loginUser = req.user;
    const requestId = req.params.requestId;
    const status = req.params.status;
    const allowedStatus = ["accepted", "rejected"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ message: "invalid status" });
    }
    console.log(requestId, loginUser._id, status);
    const connection = await ConnectionModels.findOne({
      _id: requestId,
      status: "interested",
      toUserId: loginUser._id,
    });

    if (!connection) {
      return res.status(400).json({ message: "no connection request found" });
    }
    connection.status = status;
    const data = await connection.save();
    return res
      .status(400)
      .json({ message: `request is ${status} sucessfully`, data });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};


//___________________________________get all pending request for login user____________________________


export const pendingRequest=async(req,res)=>{
  try{

    const loginUser= req.user

    const pendingrequest= await ConnectionModels.find({
      toUserId: loginUser._id,
      status:"interested"

    }).populate("fromUserId","name  image_url about ")
    return res.status(200).json({message:"succesfuly get all pending requests",pendingrequest})




  }
  catch(err){
return res.status(400).json({message:err.message})


  }
}


//_______________connections__________________

export  const Connections_friends= async(req,res,next)=>{
try{
const loginUser=req.user

  const connections= await ConnectionModels.find({
   $or:[ {status:"accepted",toUserId:loginUser._id},
    {status:"accepted",fromUserId:loginUser._id,}


   ]
  }).populate("fromUserId","name  image_url about ").populate("toUserId","name  image_url about ")
const data= connections.map((row)=>{
if(row.fromUserId._id.toString()===loginUser._id.toString()){
  return  row.toUserId

}
return row.fromUserId


})




  return res.status(200).json({message:"sucessfully get all connections",data})




}
catch(err){
return res.status(400).json({message:err.message})

}



}