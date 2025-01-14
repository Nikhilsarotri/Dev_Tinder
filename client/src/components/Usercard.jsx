// import axios from "axios"
// import { Base_Url } from "../constants"
// import { useDispatch } from "react-redux"
// import { removeUserfeed } from "../utilis/feedSlice"
// import { useState } from "react"

// export const UserCard= ({user})=>{
//     console.log(user)
//     const [showtoast,setToast]= useState(false)

// const dispatch= useDispatch();
// const handlefeedrequest=async(status,_id)=>{
// try
// {
//   const res= await axios.post(
//     `${Base_Url}/connections/sendconnection/${status}/${_id}`,
//     {},
//     { withCredentials: true }
//   );

//   dispatch(removeUserfeed(_id))
//   setToast(true);
// setTimeout(()=>{
//   setToast(false)

// },2000)
// }
// catch(err){
//    console.log(err.message)
//   return err.message
// }

// }




//     return(
// <>

// <div className="hero bg-base-200  h-screen ">
//   <div className="hero-content  flex-col lg:flex-row">
//     <img
// src={user?.image_url||"https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?semt=ais_hybrid"}
// alt="user" 
//       className="max-w-sm rounded-lg shadow-2xl" />
//     <div>
//       <h1 className="text-5xl font-bold">{user?.name}</h1>
//       <p className="p-1 font-">
//       {" "+user.about}
//       </p>
//       <p className="p-1">
//       {" "+user.age}
//       </p>
//       <p className="p-1">
//       {" "+user.gender}
//       </p>
      
//       <button className="btn bg-red-500 mx-5"    onClick={()=>handlefeedrequest("ignore",user?._id)}>Ignore</button>
//       <button className="btn bg-green-500"onClick={()=>handlefeedrequest("interested",user?._id)}>Interested</button>
      
//     </div>
//   </div>
// </div>
// {showtoast&&<div className="toast toast-end toast-middle">
 
//   <div className="alert alert-success">
//     <span>sucessfull action </span>
//   </div>
// </div>}
// </>
// )}





import axios from "axios";
import { Base_Url } from "../constants";
import { useDispatch } from "react-redux";
import { removeUserfeed } from "../utilis/feedSlice";
import { useState } from "react";

export const UserCard = ({ user }) => {
  const [showToast, setToast] = useState(false);
  const dispatch = useDispatch();

  const handleFeedRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        `${Base_Url}/connections/sendconnection/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserfeed(_id));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="hero bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen flex items-center justify-center p-4">
        <div className="card w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden md:flex">
          <div className="relative w-full md:w-1/3">
            <img
              src={
                user?.image_url ||
                "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?semt=ais_hybrid"
              }
              alt="user"
              className="w-full h-full object-cover rounded-lg shadow-md transform transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col justify-between w-full">
            <h1 className="text-4xl font-semibold text-gray-800 transition-all duration-300 ease-in-out hover:text-teal-600">
              {user?.name || "Unknown User"}
            </h1>
            <p className="text-lg text-gray-600 mt-2">{user?.about || "No bio available."}</p>
            <div className="mt-6">
              {user?.age && <p className="text-sm text-gray-500">Age: {user?.age}</p>}
              {user?.gender && <p className="text-sm text-gray-500">Gender: {user?.gender}</p>}
            </div>
            <div className="mt-6 flex gap-4">
              <button
                className="btn btn-error flex-1 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleFeedRequest("ignore", user?._id)}
              >
                Ignore
              </button>
              <button
                className="btn btn-success flex-1 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleFeedRequest("interested", user?._id)}
              >
                Interested
              </button>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-end toast-middle">
          <div className="alert alert-success bg-teal-500">
            <span>Action performed successfully!</span>
          </div>
        </div>
      )}
    </>
  );
};
