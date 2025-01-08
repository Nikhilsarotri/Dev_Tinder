import axios from "axios"
import { Base_Url } from "../constants"
import { useEffect } from "react"

const Requests=()=>{




    const fetchRequests= async()=>{
        try{
        const res = await axios.get(Base_Url+"/connections/pending_request",{withCredentials:true})
        console.log(res?.data.pendingrequest

        );
        
    }


catch(err){
    console.log(err.message)
    return err.message

}}


useEffect(()=>{
    fetchRequests();

},[])



return(


    <h1>requests</h1>
)


    


}
export default Requests;