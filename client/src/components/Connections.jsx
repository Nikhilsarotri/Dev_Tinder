import axios from "axios"
import { Base_Url } from "../constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utilis/connectionSlice"
import { useNavigate } from "react-router-dom"
 const Connections=()=>{


    
const connections=useSelector((store)=>store.connections)
    const dispatch= useDispatch()
    const navigate=useNavigate()
    console.log("herrrerrer",connections,"8888888")



    const fetchConnections=async()=>{
        try{
            
        const res= await axios.get(Base_Url+"/connections/connections_all",{withCredentials:true})
console.log(res.data.data)
  dispatch(addConnections(res.data.data))
        }
        catch(error){
          if (error.response && error.response.data.message === "jwt expired") {
            navigate("/login")
          }
          else {
            console.error("Error fetching connections:", error);
        }
           

        }

    }

    useEffect(()=>{
      fetchConnections();
    },[])
    if (!connections) {
        return <h1 className="text-center mt-10 text-gray-500">Loading...</h1>;
      }
    
      if (connections?.length === 0) {
        return <h1 className="text-center mt-10 text-gray-500">No connection found</h1>;
      }


      const handlemessageclick=async()=>{

try{

  navigate("/chat")

}
catch(err){



}


      }

return(




 connections&&(   
<>
<div className="flex justify-center w-full   my-10"><h1 className="text-2xl font-bold">Connections</h1></div>


{connections.map((connection)=>{
const{name,gender,about,image_url,age,_id}=connection
console.log(gender)
  
  return(
    <div key={_id} className="  flex m-4 p-4 bg-blue-200/30  backdrop-blur-md shadow-md justify-between items-center  w-2/3 mx-auto border rounded-lg">
        <div>        <img src={image_url} className="w-24 h-24 rounded-full"  />
        </div>
        <div className="mx-5"> <h1 className="text-center font-semibold text-2xl ">{name.toUpperCase()}</h1>
        <p className="text-center  ">{age}</p>
       <p className="text-center ">{gender}</p>
       <p className="text-center">{about}</p></div>
      <div><button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mx-2 my-2  " onClick={handlemessageclick}>Message</button></div>
</div>


    )
})}





</>

 )
)


}
export default Connections;