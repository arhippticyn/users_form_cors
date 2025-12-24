import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./UsersSlice";
import { FilesReducer } from "./FilesSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    files: FilesReducer
  },
});
