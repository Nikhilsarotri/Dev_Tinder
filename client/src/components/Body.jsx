import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect } from "react";
import { addUser } from "../utilis/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Body = () => {
  const dispatch= useDispatch()
  const navigate=useNavigate()
  const userData= useSelector((store)=> store.user)
  const fetchUser = async () => {
    try {
      const result = await axios.get("http://localhost:8003/user/profile", {
        withCredentials: true,
      });
      console.log(result.data)
  
      dispatch(addUser(result.data))
    } catch (err) {
      if (err.response && err.response.status === 401) {
        navigate("/login");
      }

      console.log(err);
    }

    
  };
  
  useEffect(()=>{
    if(!userData){
    fetchUser();}
  },[])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Body;
