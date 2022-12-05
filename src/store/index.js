import { configureStore } from "@reduxjs/toolkit";
import trelloReduce from "./slices/trelloReducer";
import userReducer from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: trelloReduce.reducer,
  },
});
