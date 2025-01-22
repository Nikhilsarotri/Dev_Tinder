import axios from "axios";
import { UserCard } from "./Usercard";
import { Base_Url } from "../constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfeed } from "../utilis/feedSlice";
import { useNavigate } from 'react-router-dom';


const Feed=()=>{
const feed= useSelector((store)=>store.feed)

const navigate=useNavigate();
    const dispatch=useDispatch()

 const getfeed= async()=>{
    try {
        if (feed) return;
        const res= await axios.get(Base_Url+"/connections/feed",{withCredentials:true})
 console.log(res.data.users)
dispatch(addfeed(res.data.users))
     

    }
    catch(error){
        if (error.response && error.response.data.message === "jwt expired") {
            navigate("/login")
          }

    }



}
useEffect(()=>{
getfeed();


},[])
if(!feed ) return;
if(feed.length<=0){
    return <h1 className="flex bg-back justify-center my-10">No more users avaliable</h1>
}


return(
    feed&&(
<>
<div className=" flex bg-back justify-center items-center my-10 h-screen ">
<UserCard  user={feed[0]}/>
</div>
</>
    )


)


}
export default Feed;