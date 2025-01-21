import React from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { addConnections } from "../../utilis/connectionSlice";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Base_Url } from "../../constants";
const Sidebar = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch= useDispatch()

  const fetchConnections=async()=>{
    try{
        
    const res= await axios.get(Base_Url+"/connections/connections_all",{withCredentials:true})
console.log(res.data.data)
dispatch(addConnections(res.data.data))
    }
    catch(err){

        console.log(err.message)

    }

}
    useEffect(()=>{
      fetchConnections();
    },[])



  if (!connections)return <h1>Loading</h1>;

  return (
    <div className="flex flex-col w-full border-r border-sky-100 px-4">
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-border border border-sky-500 rounded-md"
          type="text"
          placeholder="Search"
        />
        <button className="btn text-white bg-sky-500">
          <IoMdSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider"></div>

      <div className="  overflow-auto scrollbar- scrollbar-thin scrollbar-thumb-black scrollbar-track-white ">
        {connections?.map((connection) => (
          <div key={connection._id}>
            <div className="flex items-center gap-2 hover:bg-sky-200 rounded-lg cursor-pointer">
              <div className="avatar online">     
                <div className="w-12 rounded-full">
                  
                  <img
                    src={connection.image_url||"https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
                    }
                    alt="User Avatar"
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-2">
                  <p>{connection?.name}</p>
                </div>
              </div>
            </div>
            <div className="divider h-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
