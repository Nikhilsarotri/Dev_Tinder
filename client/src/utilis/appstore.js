import {configureStore }from "@reduxjs/toolkit"
import feedReducer from "./feedSlice"
import userReducer  from "./userSlice"
import Connections from "../components/Connections";
import connectionsReducer from "./connectionSlice";
import  requestsReducer from "./requestSlice"
const appStore= configureStore({
reducer:{
    user:userReducer,
    feed:feedReducer,
connections:connectionsReducer,
requests:requestsReducer
},
})
export  default appStore;