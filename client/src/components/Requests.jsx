import axios from "axios"
import { Base_Url } from "../constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addrequest, removerequests } from "../utilis/requestSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Requests=()=>{
    const requests=useSelector((store)=>store.requests)
console.log(requests,"request in store")
    const dispatch= useDispatch();
  const navigate=useNavigate()
 

    const fetchRequests= async()=>{
        try{
            
        const res = await axios.get(Base_Url+"/connections/pending_request",{withCredentials:true})
        console.log(res?.data.pendingrequest,"here is requests")
   dispatch(addrequest(res?.data?.pendingrequest ))
        
        
    }


catch(error){
  if (error.response && error.response.data.message === "jwt expired") {
    navigate("/login")
  }

    return err.message

}}


const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        `${Base_Url}/connections/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      console.log(_id,"here is id")
      console.log(res?.data, "Request reviewed successfully");
      dispatch(removerequests(_id))
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
  

useEffect(()=>{
    fetchRequests();

},[])

 if (!requests) {
    return <h1 className="text-center mt-10 text-gray-500">Loading...</h1>;
  }

  if (requests.length === 0) {
    return <h1 className="text-center mt-10 text-gray-500">No requests found</h1>;
  }
return(

    requests&&(   
<>
<div className="flex justify-center w-full   my-10"><h1 className="text-2xl font-bold">Requests</h1></div>


{requests.map((request)=>{
const{name,gender,about,image_url,age,_id}=request?.fromUserId

  
  return(
    <div key={_id} className="  flex m-4 p-4 bg-blue-200/30  backdrop-blur-md shadow-md justify-between items-center w-2/3 mx-auto border rounded-lg">
        <div>        <img src={image_url} className="w-24 h-24 rounded-full"  />
        </div>
        <div className="mx-2"> <h1 className="text-center font-semibold text-2xl ">{name.toUpperCase()}</h1>
        <p className="text-center  ">{age}</p>
       <p className="text-center ">{gender}</p>
       <p className="text-center">{about}</p></div>
       <div><button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 mx-2 my-2  "onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
       <button  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 mx-2 my-2"onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
       </div>
       
      
</div>
    )
})}







</>
)


)}
export default Requests;





