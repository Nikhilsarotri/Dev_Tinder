// import axios from "axios"
// import { useState } from "react"
// import { Base_Url } from "../constants"
// import { useDispatch } from "react-redux"
// import { addUser } from "../utilis/userSlice"
// import { useNavigate } from "react-router-dom"

// export const Editprofile=({user})=>{

//   if (!user) {
//     console.log("loading")
//     // Render a fallback UI while `user` is null
//     return <div><span className="loading loading-spinner loading-xs"></span>
//     <span className="loading loading-spinner loading-sm"></span>
//     <span className="loading loading-spinner loading-md"></span>
//     <span className="loading loading-spinner loading-lg"></span></div>;
//   }

//     const[name,setName]= useState(user.name)
//     const[gender,setGender]= useState(user.gender)
//     const[about,setAbout]= useState(user.about)
//     const[photo,setPhoto]= useState(user.image_url)
//     const[age,setAge]= useState(user.age)
//     const dispatch=useDispatch();
//     const navigate=useNavigate
//     const [showtoast,setToast]= useState(false)
//     const handleSelect = (selectedGender) => {
//       setGender(selectedGender);
//     };
  
// // console.log("here is",user)

//     const handleSaveprofile= async()=>{

// try{
// const res= await axios.put(Base_Url+"/user/update",{name,gender,about,photo,age},{withCredentials:true})
// // console.log("here is res",res?.data?.updateduser)
// dispatch(addUser(res.data.updateduser))
// setToast(true);
// setTimeout(()=>{
//   setToast(false)

// },2000)

// }
// catch(error){
//   if (error.response && error.response.data.message === "jwt expired") {
//     navigate("/login")
//   }
//     console.log(err)
// }

//     }

    


//   return(



//     <>
    
//     <div className=" flex justify-center m-10    "> 
//     <div className="card  w-96 shadow-2xl flex items-center align-content: center ">
//   <div className="card-body ">
//     <h2 className="card-title justify-center ">Edit Profile</h2>
//   Name<input
//   type="text"
//   value={name}
//   placeholder="Name........"
//   className="input input-bordered input-info w-full max-w-xs p-5"
//   onChange={(e)=> setName(e.target.value)} />
//       {/* <input
//   type="text"
//   value={gender}
//   onChange={(e)=>setGender(e.target.value)}
//   placeholder="Gender....."
//   className="input input-bordered input-info w-full max-w-xs" /> */}
 
//  Gender<div className="dropdown dropdown-end ">
//       {/* Dropdown toggle */}
//       <div
//         tabIndex={0}
//         role="button"
//         className="input input-bordered input-info w-full max-w-xs cursor-pointer p-2 pl-5"
//       >
//         {gender || "Select Gender"} {/* Show selected gender or placeholder */}
//       </div>

//       {/* Dropdown menu */}
//       <ul
//         tabIndex={0}
//         className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow "
//       >
//         <li>
//           <a
//             onClick={() => handleSelect("Male")} // Set the selected gender
//             className="cursor-pointer"
//           >
//             Male
//           </a>
//         </li>
//         <li>
//           <a
//             onClick={() => handleSelect("Female")} // Set the selected gender
//             className="cursor-pointer"
//           >
//             Female
//           </a>
//         </li>
//       </ul>
//     </div>

// About<input
//   type="text"
//   value={about}
//   onChange={(e)=>setAbout(e.target.value)}
//   placeholder="About....."
//   className="input input-bordered input-info w-full max-w-xs" />

// Photo<input
//   type="text"
//   value={photo}
//   onChange={(e)=>setPhoto(e.target.value)}
//   placeholder="PhotoUrl......"
//   className="input input-bordered input-info w-full max-w-xs" />
//    Age<input
//   type="text"
//   value={age}
//   onChange={(e)=>setAge(e.target.value)}
//   placeholder="Age......"
//   className="input input-bordered input-info w-full max-w-xs" />
   
   
   
//     <div className="card-actions justify-center">
//       <button 
//       onClick={handleSaveprofile}
      
//       className="btn bg-sky-500 w-28">Save Profile</button>
//     </div>
//   </div>
// </div>
// </div>

// {showtoast&&<div className="toast toast-end toast-middle">
 
//   <div className="alert alert-success">
//     <span>Profile Saved successfully.</span>
//   </div>
// </div>}
    
//     </>
// )





// }











import axios from "axios"
import { useState } from "react"
import { Base_Url } from "../constants"
import { useDispatch } from "react-redux"
import { addUser } from "../utilis/userSlice"
import { useNavigate } from "react-router-dom"

export const Editprofile = ({ user }) => {
    const [name, setName] = useState(user?.name || "")
    const [gender, setGender] = useState(user?.gender || "")
    const [about, setAbout] = useState(user?.about || "")
    const [photo, setPhoto] = useState(user?.image_url || "")
    const [age, setAge] = useState(user?.age || "")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showToast, setToast] = useState(false)

    const handleSelect = (selectedGender) => {
        setGender(selectedGender)
    }

    const handleSaveprofile = async () => {
        try {
            const res = await axios.put(Base_Url + "/user/update", 
                { name, gender, about, photo, age }, 
                { withCredentials: true }
            )
            dispatch(addUser(res.data.updateduser))
            setToast(true)
            setTimeout(() => setToast(false), 2000)
        } catch (error) {
            if (error.response?.data?.message === "jwt expired") {
                navigate("/login")
            }
            console.error(error)
        }
    }

    if (!user) {
        return (
            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Edit Profile
                    </h2>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your age"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Gender
                            </label>
                            <div className="flex space-x-4">
                                {["Male", "Female"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option)}
                                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                            gender === option
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                About
                            </label>
                            <textarea
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                className="textarea textarea-bordered w-full h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Tell us about yourself..."
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Profile Photo URL
                            </label>
                            <input
                                type="text"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                                className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Paste image URL here"
                            />
                            {photo && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500 mb-2">Preview:</p>
                                    <img
                                        src={photo}
                                        alt="Profile preview"
                                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center mt-8">
                            <button
                                onClick={handleSaveprofile}
                                className="btn btn-primary px-8 py-3 text-lg font-medium transition-transform hover:scale-105"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showToast && (
                <div className="toast toast-bottom toast-center">
                    <div className="alert alert-success flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Profile updated successfully!</span>
                    </div>
                </div>
            )}
        </div>
    )
}