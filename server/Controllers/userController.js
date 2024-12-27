import userModels from "../Models/userModel.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import fs from "fs";
import cloudinary from "../helper/cloudinary.js";
import path from "path";

//_________________createuser/signup___________________________
export const createUser = async (req, res) => {
  try {
    const { name, email, password, gender, about } = req.body;
    const image = req.file ? req.file.path : null;
    if (!name || !email || !password || !gender) {
      return res.status(404).json("invalid payload");
    }

    const existingemail = await userModels.findOne({ email });
    console.log(existingemail, "???????????????");
    if (existingemail) {
      return res.status(404).json({ message: "email already exist" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    let user = await userModels.create({
      name,
      email,
      about,
      password: hashedpassword,
      gender,
    });

    if (image) {
      const result = await cloudinary.uploader.upload(image);

      user = await userModels.findByIdAndUpdate(
        user._id,
        { image, image_url: result.secure_url },
        { new: true }
      );
    }

    return res.status(201).json({ message: "user created sucessfully", user });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
//_________________deleteuser___________________________

export const deleteUser = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ messagr: "user is required" });
    }
    const deleteduser = await userModels.findByIdAndDelete(user._id);
    return res
      .status(400)
      .json({ messagr: "user deleted sucessfully", deleteduser });
  } catch (err) {
    return res.status(400).json({ messagr: err.message });
  }
};
//_________________userlogin/login___________________________

export const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "email or password  are required" });
    }

    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "invalid email or password" });
    }

    const userMatch = await bcrypt.compare(password, user.password);
    if (!userMatch) {
      return res.status(404).json({ message: "invalid email or password" });
    }

    const token = JWT.sign(
      { userid: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    console.log(token);
    const updateuser = await userModels.findByIdAndUpdate(
      user._id,
      { $set: { token: token } },
      { new: true }
    );

    res.cookie("token", token);
    return res.status(200).json({
      message: "login sucessfully",
      user})
    //   token,
    //   name: user.name,
    //   userid: user._id,
    // });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
//_________________logout___________________________

export const logoutuser = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expiresIn: new Date(Date.now()),
    });
    return res.status(200).json({ message: "Logout sucessfully" });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
//_________________user/profile___________________________

export const userProfile = async (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    res.send(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
//_________________updateuser___________________________

export const updateuser = async (req, res, next) => {
  try {
    const loginuser = req.user;
    console.log(loginuser, "here is your loggedin usr");
    if (!loginuser) {
      return res.status(400).json({ message: "no user found" });
    }
    const { name, about, gender } = req.body;

    let newImage = loginuser.image;
    let imageUrl = loginuser.image_url;

    if (req.file) {
      newImage = req.file.path;

      const result = await cloudinary.uploader.upload(newImage);
      imageUrl = result.secure_url;

      if (newImage && loginuser.image) {
        const oldImagePath = path.join("uploads/", "..", loginuser.image);
        fs.unlink(oldImagePath, (err) => {
          console.log("image unlinked sucessfully");

          if (err) {
            console.error("Failed to delete old image:", err);
          }
        });
      }
    }
    const data = {
      name: name || loginuser.name,
      about: about || loginuser.about,
      gender: gender || loginuser.gender,
      image: newImage,
      image_url: imageUrl,
    };
    const updateduser = await userModels.findByIdAndUpdate(
      loginuser._id,
      data,
      {
        new: true,
      }
    );
    return res
      .status(200)
      .json({ message: "user updated sucessfully", updateduser });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

//_________________update/password___________________________

export const updatePassword = async (req, res, next) => {
  try {
    const loginuser = req.user;
    if (!loginuser) {
      return res.status(400).json({ message: "no user found" });
    }
    const { currentpasword, newPassword } = req.body;
    const hashedcurrentpassword = await bcrypt.hash(currentpasword, 10);

    console.log(loginuser.password);
    const passwordMatch = bcrypt.compare(
      hashedcurrentpassword,
      loginuser.password
    );
    if (!passwordMatch) {
      return res.status(400).json({ message: "password not  matched" });
    }

    const hashednewPassword = await bcrypt.hash(newPassword, 10);
    const data = {
      password: hashednewPassword,
    };

    const updateduser = await userModels.findByIdAndUpdate(
      loginuser._id,
      data,
      {
        new: true,
      }
    );

    return res
      .status(200)
      .json({ message: "password updated sucessfully", updateduser });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

//_________________
