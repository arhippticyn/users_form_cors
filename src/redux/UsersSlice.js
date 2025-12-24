import { createSlice } from "@reduxjs/toolkit";
import {
  AddFile,
  AddUsers,
  DeleteUsers,
  FetchUsers,
  PatchUsers,
  ProccessImage,
} from "./operation";

const UsersInitialState = {
  error: null,
  isLoading: false,
  users: [],
};

const UsersSlice = createSlice({
  name: "users",
  initialState: UsersInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(AddUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
      })
      .addCase(AddUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(DeleteUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteUsers.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(DeleteUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(FetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(FetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(ProccessImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ProccessImage.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(ProccessImage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(PatchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(PatchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.username = action.payload;
      })
      .addCase(PatchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const UsersReducer = UsersSlice.reducer;
