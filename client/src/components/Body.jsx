// import { Outlet, useNavigate } from "react-router-dom";
// import Navbar from "./NavBar";
// import Footer from "./Footer";
// import axios from "axios";
// import { useEffect } from "react";
// import { addUser } from "../utilis/userSlice";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { Base_Url } from "../constants";

// const Body = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((store) => store.user);

//   const fetchUser = async () => {
//     if (userData) return;
//     try {
//       const result = await axios.get(Base_Url + "/user/profile", {
//         withCredentials: true,
//       });
//       console.log(result.data);

//       dispatch(addUser(result.data));
//     } catch (err) {
//       if (err.response.status === 401) {
//         navigate("/login");
//       }

//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);






//   return (
//     <div className="flex flex-col bg-[#FBFBFB] min-h-screen overflow-hidden">
//       <Navbar />
//       <main className="flex-grow pt-[70px]">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };
// export default Body;








import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect } from "react";
import { addUser } from "../utilis/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Base_Url } from "../constants";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const result = await axios.get(Base_Url + "/user/profile", {
        withCredentials: true,
      });
      dispatch(addUser(result.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f8f9fa] via-[#f1f3f5] to-[#e9ecef]">
      {/* Navbar with fixed positioning and shadow */}
      <Navbar className="fixed top-0 w-full z-50 shadow-sm bg-white/80 backdrop-blur-sm" />
      
      {/* Main content area with animation support */}
      <main className="flex-grow pt-[70px] container mx-auto px-4 md:px-6 max-w-screen-xl animate-[fadeIn_0.3s_ease-out]">
        <Outlet />
      </main>
      
      {/* Enhanced footer */}
      <Footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-auto" />
    </div>
  );
};

export default Body;




