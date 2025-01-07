export const UserCard= ({user})=>{
    console.log(user)
    return(


<div className="hero bg-base-200  h-screen ">
  <div className="hero-content  flex-col lg:flex-row">
    <img
src={user?.image_url}
alt="user" 
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{user?.name}</h1>
      <p className="py-6">
      {" "+user.about}
      </p>
      <p className="py-6">
      {" "+user.gender}
      </p>
      
      <button className="btn bg-red-500 mx-5">Ignore</button>
      <button className="btn bg-green-500">Interested</button>
      
    </div>
  </div>
</div>

)}





