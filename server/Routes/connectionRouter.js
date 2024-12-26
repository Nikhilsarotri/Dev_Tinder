import express from "express"
import userAuth from "../middlewares/auth.js";
import { Connections_friends, CreateConnection, feed, pendingRequest, reviewRequest } from "../Controllers/connectionController.js";



const router= express.Router();
router.post("/sendconnection/:status/:id",userAuth,CreateConnection)
router.post("/review/:status/:requestId",userAuth,reviewRequest)
router.get("/pending_request",userAuth,pendingRequest);
router.get("/connections_all",userAuth,Connections_friends)
router.get("/feed",userAuth,feed)

export default router;