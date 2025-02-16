// import axios from "axios";
// import { useState } from "react";
// import { Base_Url } from "../constants";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utilis/userSlice";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const [gender, setGender] = useState("");
//   const [about, setAbout] = useState();
//   const [image, setImage] = useState();
//   const [age, setAge] = useState();
  
//   const [showtoast, setToast] = useState(false);
//   const navigate= useNavigate();
//   const handleSelect = (selectedGender) => {
//     setGender(selectedGender);


//   };

//   const handleSignup = async () => {
//     try {
//       let image_url = "";
  
//       if (image) {
//         const formData = new FormData();
//         formData.append("file", image);
//         formData.append("upload_preset", "nikhil");
  
//         const res = await axios.post(
//           "https://api.cloudinary.com/v1_1/ds0b4sbla/image/upload",
//           formData
//         );
  
//         image_url = res.data.secure_url; // Uploaded Cloudinary URL
//       }
  
//       const response = await axios.post(
//         Base_Url + "/user",
//         { name, email, password, gender, about, age, image: image_url },
//         { withCredentials: true }
//       );
  
//       setToast(true);
//       setTimeout(() => {
//         setToast(false);
//       }, 2000);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file); // Set the file to state for later upload
//     }
//   };


//   return (
//     <>
//       <div className=" flex justify-center m-10    ">
//         <div className="card  w-96 shadow-2xl flex items-center align-content: center ">
//           <div className="card-body ">
//             <h2 className="card-title justify-center ">SignUp</h2>
//             Name
//             <input
//               type="text"
//               value={name}
//               placeholder="Name........"
//               className="input input-bordered input-info w-full max-w-xs p-5"
//               onChange={(e) => setName(e.target.value)}
//             />
//             Email
//             <input
//               type="text"
//               value={email}
//               placeholder="Email........"
//               className="input input-bordered input-info w-full max-w-xs p-5"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//              Password
//             <input
//               type="text"
//               value={password}
//               placeholder="Password........"
//               className="input input-bordered input-info w-full max-w-xs p-5"
//               onChange={(e) => setPassword(e.target.value)}
//             />
            
//             {/* <input
//   type="text"
//   value={gender}
//   onChange={(e)=>setGender(e.target.value)}
//   placeholder="Gender....."
//   className="input input-bordered input-info w-full max-w-xs" /> */}
//             Gender
//             <div className="dropdown dropdown-end ">
//               {/* Dropdown toggle */}
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="input input-bordered input-info w-full max-w-xs cursor-pointer p-2 pl-5"
//               >
//                 {gender || "Select Gender"}{" "}
//                 {/* Show selected gender or placeholder */}
//               </div>

//               {/* Dropdown menu */}
//               <ul
//                 tabIndex={0}
//                 className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow "
//               >
//                 <li>
//                   <a
//                     onClick={() => handleSelect("Male")} // Set the selected gender
//                     className="cursor-pointer"
//                   >
//                     Male
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={() => handleSelect("Female")} // Set the selected gender
//                     className="cursor-pointer"
//                   >
//                     Female
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             About
//             <input
//               type="text"
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//               placeholder="About....."
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//            <label>image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange} // Handle file change
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//             {image && (
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Selected Profile"
//                 className="w-32 h-32 mt-3 object-cover rounded-full border-2 border-gray-200"
//               />
//             )}
//             Age
//             <input
//               type="text"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               placeholder="Age......"
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//             <div className="card-actions justify-center">
//               <button
//                 onClick={handleSignup}
//                 className="btn bg-sky-500 w-28"
//               >
//                 SignUp
//               </button>
//               <p className="text-center mt-4 text-sm">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-500 hover:underline">
//                 Login 
//               </Link>
//             </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showtoast && (
//         <div className="toast toast-end toast-middle">
//           <div className="alert alert-success">
//             <span>Signup Sucessfully.</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default Signup;





import axios from "axios";
import { useState } from "react";
import { Base_Url } from "../constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    about: "",
    age: "",
    image: null
  });
  const [showToast, setToast] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (selectedGender) => {
    setFormData({ ...formData, gender: selectedGender });
  };

  const handleSignup = async () => {
    try {
      let image_url = "";
      if (formData.image) {
        const formDataCloud = new FormData();
        formDataCloud.append("file", formData.image);
        formDataCloud.append("upload_preset", "nikhil");
        
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/ds0b4sbla/image/upload",
          formDataCloud
        );
        image_url = res.data.secure_url;
      }

      await axios.post(
        Base_Url + "/user",
        { ...formData, image: image_url },
        { withCredentials: true }
      );

      setToast(true);
      setTimeout(() => {
        setToast(false);
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="card w-full max-w-2xl bg-white shadow-2xl rounded-lg border border-blue-100">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Create Your Account
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=".........................."
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800">Age</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="25"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800">Gender</span>
                </label>
                <div className="dropdown dropdown-end w-full">
                  <div
                    tabIndex={0}
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200 cursor-pointer"
                  >
                    {formData.gender || "Select Gender"}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box w-full shadow border border-blue-100"
                  >
                    <li><a onClick={() => handleSelect("Male")}>Male</a></li>
                    <li><a onClick={() => handleSelect("Female")}>Female</a></li>
                  </ul>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800">About</span>
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200 h-32"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800">Profile Image</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input file-input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200"
                />
                {formData.image && (
                  <div className="mt-4 flex justify-center">
                    <div className="avatar">
                      <div className="w-24 rounded-full mask mask-squircle">
                        <img src={URL.createObjectURL(formData.image)} alt="Preview" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form-control mt-8">
            <button
              onClick={handleSignup}
              className="btn w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold"
            >
              Create Account
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-blue-800">Already have an account? </span>
            <Link
              to="/login"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-success bg-green-100 border border-green-400 text-green-700">
            <span>Signup Successful! Redirecting to login...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;