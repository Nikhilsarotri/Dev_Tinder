// import axios from "axios"
// import { Base_Url } from "../constants"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addConnections } from "../utilis/connectionSlice"
// import { useNavigate } from "react-router-dom"
//  const Connections=()=>{


    
// const connections=useSelector((store)=>store.connections)
//     const dispatch= useDispatch()
//     const navigate=useNavigate()
//     console.log("herrrerrer",connections,"8888888")



//     const fetchConnections=async()=>{
//         try{
            
//         const res= await axios.get(Base_Url+"/connections/connections_all",{withCredentials:true})
// console.log(res.data.data)
//   dispatch(addConnections(res.data.data))
//         }
//         catch(error){
//           if (error.response && error.response.data.message === "jwt expired") {
//             navigate("/login")
//           }
//           else {
//             console.error("Error fetching connections:", error);
//         }
           

//         }

//     }

//     useEffect(()=>{
//       fetchConnections();
//     },[])
//     if (!connections) {
//         return <h1 className="text-center mt-10 text-gray-500">Loading...</h1>;
//       }
    
//       if (connections?.length === 0) {
//         return <h1 className="text-center mt-10 text-gray-500">No connection found</h1>;
//       }


//       const handlemessageclick=async()=>{

// try{

//   navigate("/chat")

// }
// catch(err){



// }


//       }

// return(




//  connections&&(   
// <>
// <div className="flex justify-center w-full   my-10"><h1 className="text-2xl font-bold">Connections</h1></div>


// {connections.map((connection)=>{
// const{name,gender,about,image_url,age,_id}=connection
// console.log(gender)
  
//   return(
//     <div key={_id} className="  flex m-4 p-4 bg-blue-200/30  backdrop-blur-md shadow-md justify-between items-center  w-2/3 mx-auto border rounded-lg">
//         <div>        <img src={image_url} className="w-24 h-24 rounded-full"  />
//         </div>
//         <div className="mx-5"> <h1 className="text-center font-semibold text-2xl ">{name.toUpperCase()}</h1>
//         <p className="text-center  ">{age}</p>
//        <p className="text-center ">{gender}</p>
//        <p className="text-center">{about}</p></div>
//       <div><button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mx-2 my-2  " onClick={handlemessageclick}>Message</button></div>
// </div>


//     )
// })}





// </>

//  )
// )


// }
// export default Connections;











import axios from "axios"
import { Base_Url } from "../constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utilis/connectionSlice"
import { useNavigate } from "react-router-dom"

const Connections = () => {
    const connections = useSelector((store) => store.connections)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const fetchConnections = async () => {
        try {
            const res = await axios.get(Base_Url + "/connections/connections_all", { withCredentials: true })
            dispatch(addConnections(res.data.data))
        } catch (error) {
            if (error.response && error.response.data.message === "jwt expired") {
                navigate("/login")
            } else {
                console.error("Error fetching connections:", error)
            }
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    

    if (!connections) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (connections?.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <h1 className="text-2xl font-semibold text-gray-600">No connections found</h1>
                <p className="text-gray-500 mt-2">Start making connections to see them here</p>
            </div>
        )
    }



     const  handleMessageClick=async()=>{

      try{

         navigate("/chat")
        
         }
         catch(err){
        
        
        
        }
        
        
      

     }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Connections</h1>
                
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
                    {connections.map((connection) => {
                        const { name, gender, about, image_url, age, _id } = connection
                        
                        return (
                            <div key={_id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex items-center">
                                <img 
                                    src={image_url||"https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"} 
                                    alt={name} 
                                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/80'
                                    }}
                                />
                                
                                <div className="ml-6 flex-1">
                                    <div className="flex items-baseline justify-between">
                                        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                                        <span className="text-sm text-gray-500">{age||18} years</span>
                                    </div>
                                    
                                    <div className="mt-2 flex items-center space-x-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                                            {gender}
                                        </span>
                                    </div>
                                    
                                    {about && (
                                        <p className="mt-3 text-gray-600 leading-relaxed">
                                            {about}
                                        </p>
                                    )}
                                </div>
                                
                                <button 
                                    onClick={ handleMessageClick}
                                    className="ml-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Message
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Connections