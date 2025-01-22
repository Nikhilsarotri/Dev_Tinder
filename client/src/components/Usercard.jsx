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
import { useNavigate } from 'react-router-dom';


export const UserCard = ({ user }) => {
  const [showToast, setToast] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleFeedRequest = async (status, _id) => {
    try {
      await axios.post(
        `${Base_Url}/connections/sendconnection/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserfeed(_id));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data.message === "jwt expired") {
        navigate("/login")
      }
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="hero bg-gradient-to-br from-blue-100 via-teal-100 to-green-50 min-h-screen flex items-center justify-center p-6">
        <div className="card w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/3 relative">
            <img
              src={
                user?.image_url ||
                "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?semt=ais_hybrid"
              }
              alt="user"
              className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl transform transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Info Section */}
          <div className="p-6 w-full flex flex-col justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-teal-600 transition-colors duration-300">
              {user?.name || "Unknown User"}
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              {user?.about || "This user hasn't shared a bio yet."}
            </p>
            <div className="mt-4 space-y-2">
              {user?.age && <p className="text-sm text-gray-500">Age: {user?.age}</p>}
              {user?.gender && <p className="text-sm text-gray-500">Gender: {user?.gender}</p>}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                className="btn btn-error px-5 py-3 flex-1 rounded-lg text-white font-medium bg-red-500 hover:bg-red-600 transition-transform duration-300 transform hover:scale-105"
                onClick={() => handleFeedRequest("ignore", user?._id)}
              >
                Ignore
              </button>
              <button
                className="btn btn-success px-5 py-3 flex-1 rounded-lg text-white font-medium bg-green-500 hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
                onClick={() => handleFeedRequest("interested", user?._id)}
              >
                Interested
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success bg-teal-500 text-white font-semibold">
            <span>Action performed successfully!</span>
          </div>
        </div>
      )}
    </>
  );
};
