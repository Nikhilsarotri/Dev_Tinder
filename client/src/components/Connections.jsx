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
<div className="h-screen"><h1>connections</h1></div>
</>

 )
)


}
export default Connections;