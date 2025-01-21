import React from 'react'
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Chatpage = () => {
  
  




  return (
    <div className="flex  justify-center h-screen  ">
  <div className=" flex  justify-center sm:h-[450px ]   md:-h[780px] my-10 text-black bg-sky-50 bg-clip-padding backdrop-filter backdrop-blur-lg opacity-75 w-full p-6 rounded-lg shadow-lg ">
    <Sidebar/>
    <MessageContainer/>
  </div>
</div>


    
  )
}

export default Chatpage;