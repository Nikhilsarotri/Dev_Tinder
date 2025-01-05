import axios from "axios"
import { useState } from "react"
import { Base_Url } from "../constants"
import { useDispatch } from "react-redux"
import { addUser } from "../utilis/userSlice"

export const Editprofile=({user})=>{

  if (!user) {
    console.log("loading")
    // Render a fallback UI while `user` is null
    return <div><span className="loading loading-spinner loading-xs"></span>
    <span className="loading loading-spinner loading-sm"></span>
    <span className="loading loading-spinner loading-md"></span>
    <span className="loading loading-spinner loading-lg"></span></div>;
  }

    const[name,setName]= useState(user.name)
    const[gender,setGender]= useState(user.gender)
    const[about,setAbout]= useState(user.about)
    const[photo,setPhoto]= useState(user.image_url)
    const[age,setAge]= useState(user.age)
    const dispatch=useDispatch();
    const [showtoast,setToast]= useState(false)
    const handleSelect = (selectedGender) => {
      setGender(selectedGender);
    };
  
// console.log("here is",user)

    const handleSaveprofile= async()=>{

try{
const res= await axios.put(Base_Url+"/user/update",{name,gender,about,photo,age},{withCredentials:true})
// console.log("here is res",res?.data?.updateduser)
dispatch(addUser(res.data.updateduser))
setToast(true);
setTimeout(()=>{
  setToast(false)

},2000)

}
catch(err){
    console.log(err)
}

    }

    


  return(



    <>
    
    <div className=" flex justify-center m-10    "> 
    <div className="card  w-96 shadow-2xl flex items-center align-content: center ">
  <div className="card-body ">
    <h2 className="card-title justify-center ">Edit Profile</h2>
  Name<input
  type="text"
  value={name}
  placeholder="Name........"
  className="input input-bordered input-info w-full max-w-xs p-5"
  onChange={(e)=> setName(e.target.value)} />
      {/* <input
  type="text"
  value={gender}
  onChange={(e)=>setGender(e.target.value)}
  placeholder="Gender....."
  className="input input-bordered input-info w-full max-w-xs" /> */}
 
 Gender<div className="dropdown dropdown-end ">
      {/* Dropdown toggle */}
      <div
        tabIndex={0}
        role="button"
        className="input input-bordered input-info w-full max-w-xs cursor-pointer p-2 pl-5"
      >
        {gender || "Select Gender"} {/* Show selected gender or placeholder */}
      </div>

      {/* Dropdown menu */}
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow "
      >
        <li>
          <a
            onClick={() => handleSelect("Male")} // Set the selected gender
            className="cursor-pointer"
          >
            Male
          </a>
        </li>
        <li>
          <a
            onClick={() => handleSelect("Female")} // Set the selected gender
            className="cursor-pointer"
          >
            Female
          </a>
        </li>
      </ul>
    </div>

About<input
  type="text"
  value={about}
  onChange={(e)=>setAbout(e.target.value)}
  placeholder="About....."
  className="input input-bordered input-info w-full max-w-xs" />

Photo<input
  type="text"
  value={photo}
  onChange={(e)=>setPhoto(e.target.value)}
  placeholder="PhotoUrl......"
  className="input input-bordered input-info w-full max-w-xs" />
   Age<input
  type="text"
  value={age}
  onChange={(e)=>setAge(e.target.value)}
  placeholder="Age......"
  className="input input-bordered input-info w-full max-w-xs" />
   
   
   
    <div className="card-actions justify-center">
      <button 
      onClick={handleSaveprofile}
      
      className="btn bg-sky-500 w-28">Save Profile</button>
    </div>
  </div>
</div>
</div>

{showtoast&&<div className="toast toast-end toast-middle">
 
  <div className="alert alert-success">
    <span>Profile Saved successfully.</span>
  </div>
</div>}
    
    </>
)





}