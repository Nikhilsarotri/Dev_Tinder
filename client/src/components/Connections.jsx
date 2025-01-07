import axios from "axios"
import { Base_Url } from "../constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utilis/connectionSlice"

 const Connections=()=>{


    
const connections=useSelector((store)=>store.connections)
    const dispatch= useDispatch()
    console.log("herrrerrer",connections,"8888888")



    const fetchConnections=async()=>{
        try{
            if (connections) return
        const res= await axios.get(Base_Url+"/connections/connections_all",{withCredentials:true})
console.log(res.data.data)
  dispatch(addConnections(res.data.data))
        }
        catch(err){

            console.log(err.message)

        }

    }

    useEffect(()=>{
      fetchConnections();
    },[])

return(
 connections&&(   
<>
<div className="flex justify-center w-full   my-10"><h1 className="text-2xl font-bold">Connections</h1></div>


{connections.map((connection)=>{
const{name,gender,about,image_url,age}=connection
console.log(gender)
  
  return(
    <div className="  flex m-4 p-4 bg-blue-200/30  backdrop-blur-md shadow-md   w-1/2 mx-auto border rounded-lg">
        <div>        <img src={image_url} className="w-24 h-24 rounded-full"  />
        </div>
        <div className="mx-5"> <h1 className="text-center font-semibold text-2xl ">{name.toUpperCase()}</h1>
        <p className="text-center  ">{age}</p>
       <p className="text-center ">{gender}</p>
       <p className="text-center">{about}</p></div>
      
</div>
    )
})}





</>

 )
)


}
export default Connections;