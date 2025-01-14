import axios from "axios";
import { useState } from "react";
import { Base_Url } from "../constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [gender, setGender] = useState("");
  const [about, setAbout] = useState();
  const [image, setImage] = useState();
  const [age, setAge] = useState();
  
  const [showtoast, setToast] = useState(false);
  const navigate= useNavigate();
  const handleSelect = (selectedGender) => {
    setGender(selectedGender);


  };

  const handleSignup = async () => {
    try {
      let image_url = "";
  
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "nikhil");
  
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/ds0b4sbla/image/upload",
          formData
        );
  
        image_url = res.data.secure_url; // Uploaded Cloudinary URL
      }
  
      const response = await axios.post(
        Base_Url + "/user",
        { name, email, password, gender, about, age, image: image_url },
        { withCredentials: true }
      );
  
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Set the file to state for later upload
    }
  };


  return (
    <>
      <div className=" flex justify-center m-10    ">
        <div className="card  w-96 shadow-2xl flex items-center align-content: center ">
          <div className="card-body ">
            <h2 className="card-title justify-center ">SignUp</h2>
            Name
            <input
              type="text"
              value={name}
              placeholder="Name........"
              className="input input-bordered input-info w-full max-w-xs p-5"
              onChange={(e) => setName(e.target.value)}
            />
            Email
            <input
              type="text"
              value={email}
              placeholder="Email........"
              className="input input-bordered input-info w-full max-w-xs p-5"
              onChange={(e) => setEmail(e.target.value)}
            />
             Password
            <input
              type="text"
              value={password}
              placeholder="Password........"
              className="input input-bordered input-info w-full max-w-xs p-5"
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* <input
  type="text"
  value={gender}
  onChange={(e)=>setGender(e.target.value)}
  placeholder="Gender....."
  className="input input-bordered input-info w-full max-w-xs" /> */}
            Gender
            <div className="dropdown dropdown-end ">
              {/* Dropdown toggle */}
              <div
                tabIndex={0}
                role="button"
                className="input input-bordered input-info w-full max-w-xs cursor-pointer p-2 pl-5"
              >
                {gender || "Select Gender"}{" "}
                {/* Show selected gender or placeholder */}
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
            About
            <input
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="About....."
              className="input input-bordered input-info w-full max-w-xs"
            />
           <label>image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange} // Handle file change
              className="input input-bordered input-info w-full max-w-xs"
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Selected Profile"
                className="w-32 h-32 mt-3 object-cover rounded-full border-2 border-gray-200"
              />
            )}
            Age
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age......"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <div className="card-actions justify-center">
              <button
                onClick={handleSignup}
                className="btn bg-sky-500 w-28"
              >
                SignUp
              </button>
              <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login 
              </Link>
            </p>
            </div>
          </div>
        </div>
      </div>

      {showtoast && (
        <div className="toast toast-end toast-middle">
          <div className="alert alert-success">
            <span>Signup Sucessfully.</span>
          </div>
        </div>
      )}
    </>
  );
};
export default Signup;
