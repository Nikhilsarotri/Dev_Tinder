import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

 const connectdb=async()=>{
try{
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("Database connected sucessfully")
    

}
catch(err){
    console.log("error connecting to database",err.message);
    

}



 }
 export default connectdb;