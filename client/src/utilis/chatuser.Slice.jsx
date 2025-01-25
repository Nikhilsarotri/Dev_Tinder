
import {createSlice} from "@reduxjs/toolkit"

const chatuserSlice=createSlice({

    name:"chatuser",
    initialState:null,
    reducers:{
        
        setSelectedUser:(state,action)=>{

return action.payload;

        },
    }

})

export const {setSelectedUser}=chatuserSlice.actions
export default chatuserSlice.reducer