import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect } from "react";
import { addUser } from "../utilis/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import  {Base_Url} from "../constants"

const Body = () => {
  const dispatch= useDispatch()
  const navigate=useNavigate()
  const userData= useSelector((store)=> store.user)


  const fetchUser = async () => {
    if(userData) return;
    try {
      const result = await axios.get(Base_Url+"/user/profile", {
        withCredentials: true,
      });
      console.log(result.data)
  
      dispatch(addUser(result.data))
    } catch (err) {
      if ( err.response.status === 401) {
        navigate("/login");
      }

      console.log(err);
    }

    
  };
  
  useEffect(()=>{
    
    fetchUser();
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
