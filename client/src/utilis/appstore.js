import {configureStore }from "@reduxjs/toolkit"
import feedReducer from "./feedSlice"
import userReducer  from "./userSlice"
import Connections from "../components/Connections";
import connectionsReducer from "./connectionSlice";
import  requestsReducer from "./requestSlice";
import messagesReducer from "./messagesSlice";
import chatuserReducer from "./chatuser.Slice"
const appStore= configureStore({
reducer:{
    user:userReducer,
    feed:feedReducer,
connections:connectionsReducer,
requests:requestsReducer,
messages:messagesReducer,
chatuser:chatuserReducer
},
})
export  default appStore;