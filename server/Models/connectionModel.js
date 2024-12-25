import mongoose, { Schema } from "mongoose";

const connectionSchema= new Schema({
fromUserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},

toUserId:{

    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},

status:{
    type:String,
    enum:["ignore","accepted","rejected","interested"],
    required:true
}



},{
    versionKey:false,
    timestamps:true
}





)


connectionSchema.index({fromUserId:1,toUserId:1})
const ConnectionModels= new mongoose.model("Connection",connectionSchema);
export default ConnectionModels;
    
