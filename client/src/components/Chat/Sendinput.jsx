import React from 'react'
import { IoSendSharp } from "react-icons/io5";

const Sendinput = () => {
  return (
    <form className=' px-4 my-2'>
    <div className=' w-full relative'>
        <input 
        type='text'
        placeholder='Write your message'
        className='border border-sky-400 bg-slate-50 rounded-lg w-full block text-black p-2   '
        />
        <button className='absolute flex items-center inset-y-0 end-0 pr-4'>

        <IoSendSharp />  
        </button>
        
        </div>
    </form>
  )
}

export default Sendinput