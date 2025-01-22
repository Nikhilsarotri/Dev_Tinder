import mongoose, { Schema } from "mongoose";
const messgaeSchema = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",
      required: true,
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    
date:{

    type:Date,
    default:Date.now()
}

    
  },
  {
    versionKey: false,

    timestamps: true,
  }
);

const messageModel =  mongoose.model("Message", messgaeSchema);
export default messageModel;
