import React from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { addConnections } from "../../utilis/connectionSlice";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Base_Url } from "../../constants";
import { setSelectedUser } from "../../utilis/chatuser.Slice";

const Sidebar = () => {
  const connections = useSelector((store) => store.connections);
  const selecteduser = useSelector((store) => store.chatuser);
  const onlineUsers = useSelector((store) => store?.onlineUsers);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(Base_Url + "/connections/connections_all", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (error) {
      if (error.response?.data?.message === "jwt expired") navigate("/login");
      console.error("Fetch connections error:", error.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  const SelectedUserHandler = (connection) => {
    dispatch(setSelectedUser(connection));
  };

  if (!connections) return <h1>Loading</h1>;

  return (
    <div className="flex flex-col w-full border-r border-sky-100 px-4">
      <form className="flex items-center gap-2">
        <input
          className="input input-border border border-sky-500 rounded-md"
          type="text"
          placeholder="Search"
        />
        <button className="btn text-white bg-sky-500">
          <IoMdSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider" />

      <div className="overflow-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
        {connections?.map((connection) => {
          const isOnline = onlineUsers?.includes(connection?._id);
          return (
            <div key={connection._id}>
              <div
                onClick={() => SelectedUserHandler(connection)}
                className={`${
                  selecteduser?._id === connection._id ? "bg-sky-400" : ""
                } 
                  flex items-center gap-2 hover:bg-sky-200 rounded-lg cursor-pointer px-2 py-2`}
              >
                <div
                  className={`avatar ${
                    isOnline ? "online" : "offline"
                  } flex-shrink-0`}
                >
                  <div className="w-12 rounded-full">
                    <img
                      src={
                        connection.image_url ||
                        "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
                      }
                      alt="User Avatar"
                    />
                  </div>
                </div>
                <div>
                  <p>{connection?.name}</p>
                </div>
              </div>
              <div className="divider h-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
