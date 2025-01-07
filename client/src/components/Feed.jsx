import axios from "axios";
import { UserCard } from "./Usercard";
import { Base_Url } from "../constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfeed } from "../utilis/feedSlice";

const Feed=()=>{
const feed= useSelector((store)=>store.feed)


    const dispatch=useDispatch()

 const getfeed= async()=>{
    try {
        if (feed) return;
        const res= await axios.get(Base_Url+"/connections/feed",{withCredentials:true})
 console.log(res.data.users)
dispatch(addfeed(res.data.users))
     

    }
    catch(err){
console.log(err)
    }



}
useEffect(()=>{
getfeed();


},[])



return(
    feed&&(
<>
<div className=" flex justify-center items-center my-10 h-screen ">
<UserCard  user={feed[1]}/>
</div>
</>
    )


)


}
export default Feed;