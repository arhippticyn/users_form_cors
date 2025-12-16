import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./UsersSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});
