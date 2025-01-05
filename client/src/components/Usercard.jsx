export const UserCard= ({user})=>{
    console.log(user)
    return(

<div className="card card-compact bg-slate-50 w-96 shadow-xl ">
  <figure>
    <img
      src={user?.image_url}
      alt="user" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">{user?.name}</h2>
    <p className="card-title justify-center">About:{" "+user.about}</p>
    <p className="card-title justify-center">gender:{" "+user.gender}</p>

    <div className="card-actions justify-end">
      <button className="btn bg-red-600">Ignore</button>
      <button className="btn bg-sky-400">Interested</button>
    </div>
  </div>
</div>
)}