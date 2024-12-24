import express from "express"
import { createUser, deleteUser, logoutuser, updateuser, userlogin, userProfile } from "../Controllers/userController.js";
import  userAuth  from "../middlewares/auth.js";
import { uploadSingleImage } from "../helper/multer.js";
 const router= express.Router();
 router.post("/", uploadSingleImage.single('image'),createUser);
 router.post("/login",userlogin)
 router.post("/logout",userAuth,logoutuser)
 router.get("/profile",userAuth,userProfile)
 router.put("/update",userAuth,uploadSingleImage.single('image'),updateuser)
 router.delete("/delete",userAuth,deleteUser)
 export default router;