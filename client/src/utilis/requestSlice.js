import { createSlice } from "@reduxjs/toolkit";

const requestsSlice= createSlice({
    
    name:"requests",
    initialState:[],
    reducers:{

addrequest:(state,action)=>{

    return action.payload
},


removerequests:(state,action)=>{

    const newArray=state.filter((r)=>r._id!==action.payload)
return newArray;

}


    }





})

export  const {addrequest,removerequests}= requestsSlice.actions;
export  default requestsSlice.reducer