import { createSlice } from "@reduxjs/toolkit";
import { MAX_CHAT_MSG_COUNT } from "./constant ";

const chatSlice = createSlice({
  name: "ChatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, payload) => {
      state.messages.splice(MAX_CHAT_MSG_COUNT, 1);
      state.messages.unshift(payload.payload);
    },
  },
});
export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;
