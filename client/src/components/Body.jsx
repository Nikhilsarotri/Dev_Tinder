import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"
import  Footer  from "./Footer"

  const Body=()=>{

    return(
    <>
<Navbar/>
<Outlet/>
<Footer/>

</>
    )

 }
 export default  Body;