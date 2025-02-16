// import axios from "axios";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { removeUser } from "../utilis/userSlice";
// import { Base_Url } from "../constants";
// import { useState } from "react";
// import { removeConnections } from "../utilis/connectionSlice";
// import { clearfeed } from "../utilis/feedSlice";


// const Navbar = () => {
//   const user = useSelector((store) => store?.user);
//   const dispatch= useDispatch()
//   const navigate= useNavigate()


//   //theme

//   const [theme, setTheme] = useState("light"); // Default theme is light

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme); // Assuming you have themes defined in CSS
//   };


// const handleLogout=async(req,res)=>{
//   try{
//   const user= await axios.post(Base_Url+"/user/logout",{},{
//    withCredentials:true
//   })
//   dispatch(removeUser())
//   dispatch(removeConnections())
//   dispatch(clearfeed())

// //   dispatch(removerequest())
// navigate("/login")

//   }
//   catch(error){
//     if (error.response && error.response.data.message === "jwt expired") {
//       navigate("/login")
//     }


//   }
// }



//   return (
//     <div className="navbar bg-back fixed top-0 left-0 w-full z-50 shadow-md">
//       <div className="flex-1">
//       <Link to="/">
//       <img
//           className="btn btn-ghost "
//           src="https://sleekitech.com/img/sleekitech-logo.svg"
//         /></Link>
//       </div>
//       <div className="m-5 ">
//         <label className="swap swap-rotate">
//   {/* this hidden checkbox controls the state */}
//   <input type="checkbox" className="theme-controller" onChange={toggleTheme}
//           checked={theme === "dark"} value="synthwave" />

//   {/* sun icon */}
//   <svg
//     className="swap-off h-10 w-10 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//     <path
//       d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//   </svg>

//   {/* moon icon */}
//   <svg
//     className="swap-on h-10 w-10 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//     <path
//       d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//   </svg>
// </label></div>
      
//       {user && ( <div className="flex-none gap-2">
//         <div className="form-control"   ><p className="text-2xl font-serif" >{user.name} </p></div>

//           <div className="dropdown dropdown-end mx-1 flex  ">
//             {console.log("User Name:", user?.name)}
//             {console.log("User Image URL:", user?.image_url)}
            
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar "
//             >
//               <div className="w-12  rounded-full">
//                 <img alt="image" src={user?.image_url||"https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?semt=ais_hybrid"} />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <Link to="/profile" className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/connections">Connections</Link>
//               </li>
//               <li>
//                 <Link to="/requests">Requests</Link>
//               </li>
//               <li>
//                 <a onClick={handleLogout}>Logout</a>
//               </li>
//             </ul>
//           </div>
        
//       </div>)}
//     </div>
//   );
// };
// export default Navbar;













import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utilis/userSlice";
import { Base_Url } from "../constants";
import { useState } from "react";
import { removeConnections } from "../utilis/connectionSlice";
import { clearfeed } from "../utilis/feedSlice";

const Navbar = () => {
  const user = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Theme state
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogout = async () => {
    try {
      await axios.post(Base_Url + "/user/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(removeConnections());
      dispatch(clearfeed());
      navigate("/login");
    } catch (error) {
      if (error.response?.data?.message === "jwt expired") navigate("/login");
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur-lg border-b border-base-300 transition-all duration-300">
      <div className="flex-1">
        <Link to="/" className="hover:scale-105 transition-transform duration-200">
          <img
            className="h-16 ml-6 hover:brightness-110 transition-all"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79WR9HNqhu6DQsGcfLfpdgL8MPiI3fZOb-g&s"
            alt="SleekiTech Logo"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4 mr-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-base-300/50 transition-colors duration-200"
        >
          {theme === "light" ? (
            <svg
              className="w-6 h-6 text-base-content"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-base-content"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
              />
            </svg>
          )}
        </button>

        {user && (
          <div className="flex items-center gap-4">
          
          <Link 
          to="/chat" 
          className="p-2 rounded-full hover:bg-base-300/50 transition-colors duration-200 relative"
          aria-label="Chat"
        >
          <svg
            className="w-6 h-6 text-base-content"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </Link>

          
          
          
            {/* User Info */}




            <div className="hidden md:flex flex-col items-end">
              <p className="font-semibold text-base-content">{user.name}</p>
          
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:ring-2 ring-primary/50 transition-all"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src={
                      user?.image_url ||
                      "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
              >
                <li>
                  <Link
                    to="/profile"
                    className="py-3 hover:bg-base-200/50 rounded-lg px-3 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Profile
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/connections"
                    className="py-3 hover:bg-base-200/50 rounded-lg px-3 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Connections
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/requests"
                    className="py-3 hover:bg-base-200/50 rounded-lg px-3 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Requests
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="py-3 hover:bg-error/10 text-error rounded-lg px-3 transition-colors w-full text-left"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;