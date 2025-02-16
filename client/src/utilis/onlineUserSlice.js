import { createSlice } from "@reduxjs/toolkit";
const onlineUserSlice=createSlice({

name:"onlineUsers",
initialState:[],
reducers:{

setOnlineUsers:(state,action)=>{

  return action.payload


}


}



})


export const {setOnlineUsers}=onlineUserSlice.actions;
export default onlineUserSlice.reducer;


