import React from 'react'
import { IoMdSearch } from "react-icons/io";
import OtherUser from './OtherUser';

const Sidebar = () => {
  return (
    <div className='flex flex-col w-full  border-r border-sky-100 px-4'>
        <form action='' className='flex items-center gap-2'>

   <input className='input input-border rounded-md'type="text" placeholder='Search'/>
   <button className='btn text-white bg-sky-500 '><IoMdSearch className='w-6 h-6 outline-none'/></button>

        </form>
        <div className="divider"></div>



<OtherUser/>
<OtherUser/><OtherUser/><OtherUser/><OtherUser/>
<OtherUser/>
<OtherUser/>
<OtherUser/>
<OtherUser/>
<OtherUser/>
<OtherUser/>
<OtherUser/>
      
    </div>
  )
}

export default Sidebar