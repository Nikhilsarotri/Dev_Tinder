import express from "express"
import { getmessage, sendMessage } from "../Controllers/message.Controller.js";
import userAuth from "../middlewares/auth.js"


const router= express.Router();
router.post("/send-message/:id",userAuth,sendMessage);
router.get("/get-messages/:id",userAuth,getmessage)
export default router;