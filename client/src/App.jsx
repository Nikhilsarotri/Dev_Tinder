import React from "react"
import Login from "./components/Login";
import Profile from "./components/Profile";

import {BrowserRouter,Route,Routes} from "react-router-dom"

import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utilis/appstore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";


function App() {
  
  return ( 
    <>
   <Provider store={appStore}>
   <BrowserRouter basename="/">
   <Routes>
    <Route path ="/" element={<Body/>}>
    <Route path="/" element={<Feed/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/connections" element={<Connections/>}/>
    <Route path="/requests" element={<Profile/>}/>


    </Route>



   </Routes>
   
   
   
   </BrowserRouter>
   </Provider>


</>
  );
}
export default App;

