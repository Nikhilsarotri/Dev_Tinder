import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store?.user);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
      <Link to="/">
      <img
          className="btn btn-ghost "
          src="https://sleekitech.com/img/sleekitech-logo.svg"
        /></Link>
      </div>
      
      {user && ( <div className="flex-none gap-2">
        <div className="form-control"   ><p className="text-2xl font-serif" >{user.name} </p></div>

          <div className="dropdown dropdown-end mx-1 flex  ">
            {console.log("User Name:", user?.name)}
            {console.log("User Image URL:", user?.image_url)}
            
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-12  rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.image_url} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        
      </div>)}
    </div>
  );
};
export default Navbar;
