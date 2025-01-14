import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addfeed: (state, action) => {
      return action.payload;
    },
    removeUserfeed: (state, action) => {

      const newFeed= state.filter((user)=>user._id!==action.payload)
      return newFeed;
    },

    clearfeed:(state)=>{

      return null;
    }
  },
});
export const{addfeed,removeUserfeed,clearfeed} =feedSlice.actions

export default feedSlice.reducer;
