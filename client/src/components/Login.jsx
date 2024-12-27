import React, { useState } from "react";
import axios from "axios";

const Login =()=>{
  const[email,setEmail]= useState("")
  const [password,setPassword]= useState("")



  const handleLogin=async()=>{
    try{
    const result= await axios.post("http://localhost:8003/user/login",{email,password},{
      withCredentials:true
    })
     console.log(result)

    }
    catch(err){
      console.log(err)
    }

  }





return(

    <>
    <div className=" flex justify-center m-10 "> 
    <div className="card bg-base-300 w-96 shadow-2xl flex items-center align-content: center ">
  <div className="card-body ">
    <h2 className="card-title justify-center ">Login</h2>
    <input
  type="text"
  value={email}
  placeholder="Email....."
  className="input input-bordered input-info w-full max-w-xs p-5"
  onChange={(e)=> setEmail(e.target.value)} />
      <input
  type="text"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  placeholder="Password....."
  className="input input-bordered input-info w-full max-w-xs" />
   
    <div className="card-actions justify-center">
      <button 
      onClick={handleLogin}
      className="btn bg-sky-500 w-28">Login</button>
    </div>
  </div>
</div>
</div>
    
    
    </>
)


}
export  default Login;