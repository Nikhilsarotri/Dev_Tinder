import React from 'react'
import { useSelector } from 'react-redux'

const SingleUser = (props) => {
  const{connection}=props.connection
  console.log(connection)

  const onlineUsers = useSelector((store) => store?.onlineUsers);
  console.log(onlineUsers, "onlinnnennen");
  const isOnline = onlineUsers?.includes(connection?._id);
  

  return (
    <div> <div>
    <div className="flex items-center gap-2 hover:bg-sky-200 rounded-lg  
    cursor-pointer">
      <div className={`avatar offline`}>
        
        <div className="w-12 rounded-full">
          <img src={connection?.image_url} />
        </div>
        
      </div>
      <div className="">
        <div className="flex gap-2 ">
          <p>{connection?.name}</p>
        </div>
        
      </div>
    </div>
    <div className="divider h-1"></div>
  </div>

</div>
  )
}

export default SingleUser