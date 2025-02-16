// import { createSlice } from "@reduxjs/toolkit";


// const messageSlice = createSlice({
//   name: "message",
//   initialState: {
//     messages: [],
//   },
//   reducers: {
//     setMessages: (state, action) => {
//       state.messages = action.payload;
//     },
//     addMessage: (state, action) => {
//       state.messages.push(action.payload); // Add the new message to the array
//     },
//   },
// });

// export const { setMessages,addMessage } = messageSlice.actions;
// export default messageSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: {
      data: [], // Ensure messages are inside a 'data' array
    },
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload; // This should be an object with a 'data' array
    },
    addMessage: (state, action) => {
      state.messages.data.push(action.payload); // Append new message to 'data' array
    },
  },
});

export const { setMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
