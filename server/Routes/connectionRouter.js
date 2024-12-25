import express from "express"
import userAuth from "../middlewares/auth.js";
import { CreateConnection } from "../Controllers/connectionController.js";



const router= express.Router();
router.post("/createConnection/:status/:id",userAuth,CreateConnection)


export default router;