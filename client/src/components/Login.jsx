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
  const [error, setError] = useState("")
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

    try {
      const result = await axios.post(
        `${Base_Url}/user/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log(result.data.user);
      dispatch(addUser(result.data.user));
      
      navigate("/");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-center m-10">
        <div className="card  w-96 shadow-2xl flex items-center align-content: center ">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <input
              type="text"
              value={email}
              placeholder="Email....."
              className="input input-bordered input-info w-full max-w-xs p-5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password....."
              className="input input-bordered input-info w-full max-w-xs"
            />
             {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <div className="card-actions justify-center">
              <button
                onClick={handleLogin}
                className="btn bg-gradient-to-r from-blue-100 to-teal-400 w-28"
              >
                Login
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup here
              </Link>
            </p>

          </div>
        </div>
      </div>
      

    </>
  );
};

export default Login;







