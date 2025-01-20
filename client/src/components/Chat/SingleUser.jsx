import React from 'react'

const SingleUser = () => {
  return (
    <div> <div>
    <div className="flex items-center gap-2 hover:bg-sky-200 rounded-lg  
    cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6WcpmU6ndh8j4VIpgNu4TJJNflbc3DYL_w&s" />
        </div>
        
      </div>
      <div className="">
        <div className="flex gap-2 ">
          <p>Nikhil</p>
        </div>
        
      </div>
    </div>
    <div className="divider h-1"></div>
  </div>

</div>
  )
}

export default SingleUser