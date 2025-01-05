import {configureStore }from "@reduxjs/toolkit"
import feedReducer from "./feedSlice"
import userReducer  from "./userSlice"
import Connections from "../components/Connections";
import connectionsReducer from "./connectionSlice"
const appStore= configureStore({
reducer:{
    user:userReducer,
    feed:feedReducer,
connections:connectionsReducer
},
})
export  default appStore;