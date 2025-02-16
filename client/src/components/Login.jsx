// import React, { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utilis/userSlice";
// import { useNavigate, Link } from "react-router-dom";
// import { Base_Url } from "../constants";

// const Login = () => {
//   const [email, setEmail] = useState("vikas2@gmail.com");
//   const [password, setPassword] = useState("vikas");
//   const dispatch = useDispatch();
//   const [error, setError] = useState("")
//   const navigate = useNavigate();
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   const handleLogin = async () => {

//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }

//     if (!emailPattern.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     try {
//       const result = await axios.post(
//         `${Base_Url}/user/login`,
//         { email, password },
//         {
//           withCredentials: true,
//         }
//       );
//       console.log(result.data.user);
//       dispatch(addUser(result.data.user));
      
//       navigate("/");

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center m-10">
//         <div className="card  w-96 shadow-2xl flex items-center align-content: center ">
//           <div className="card-body">
//             <h2 className="card-title justify-center">Login</h2>
//             <input
//               type="text"
//               value={email}
//               placeholder="Email....."
//               className="input input-bordered input-info w-full max-w-xs p-5"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password....."
//               className="input input-bordered input-info w-full max-w-xs"
//             />
//              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//             <div className="card-actions justify-center">
//               <button
//                 onClick={handleLogin}
//                 className="btn bg-gradient-to-r from-blue-100 to-teal-400 w-28"
//               >
//                 Login
//               </button>
//             </div>
//             <p className="text-center mt-4 text-sm">
//               Don't have an account?{" "}
//               <Link to="/signup" className="text-blue-500 hover:underline">
//                 Signup here
//               </Link>
//             </p>

//           </div>
//         </div>
//       </div>
      

//     </>
//   );
// };

// export default Login;














import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { Base_Url } from "../constants";

const Login = () => {
  const [email, setEmail] = useState("vikas2@gmail.com");
  const [password, setPassword] = useState("vikas");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await axios.post(
        `${Base_Url}/user/login`,
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(result.data.user));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 p-4">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-lg border border-blue-100">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Welcome Back
          </h2>
          
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800">Email</span>
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text text-blue-800">Password</span>
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 border-blue-200"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mt-4 bg-red-50 border border-red-200 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Login Button */}
          <div className="form-control mt-6">
            <button
              onClick={handleLogin}
              className={`btn w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold ${
                isLoading ? 'loading' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-blue-800">Don't have an account? </span>
            <Link
              to="/signup"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;