import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice";
import menuReducer from "./MenuSlice";
import chatReducer from "./ChatSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default store;
