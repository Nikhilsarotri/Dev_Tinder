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

if (!feed) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    )
}

if (feed.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <h1 className="text-2xl font-semibold text-gray-600">No more users</h1>
            <p className="text-gray-500 mt-2">Users will appear here</p>
        </div>
    )
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