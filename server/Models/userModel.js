import mongoose, { Schema } from "mongoose";
import validate from "validator";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      unique: true,
      validate(value) {
        if (!validate.isEmail(value)) {
          throw new Error("invalid email id" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
    },

    gender: { type: String, enum: ["Male", "Female"], required: true },
    token: {
      type: String,
    },
    image_url: {
      type: String,
    },
    image: {
      type: String,
    },
    about: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModels = mongoose.model("User", userSchema);
export default userModels;
