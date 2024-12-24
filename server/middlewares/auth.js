import JWT from "jsonwebtoken";
import userModels from "../Models/userModel.js";
 const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "no token" });
    }
    const decodedata =  JWT.verify(token,process.env.JWT_SECRET_KEY);

    console.log(decodedata, "here  is decoded data");
    const {userid} = decodedata;
    console.log(userid,".>>>>>>>>>>")

    const user = await userModels.findById(userid);
    if (!user) {
      return res.status(400).json({ message: "no user found" });
    }

    req.user = user
    next();
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: err.message });
  }
};
export default userAuth;