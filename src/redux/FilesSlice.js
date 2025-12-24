import { createSlice } from "@reduxjs/toolkit";
import { AddFile, DeleteFiles, GetFiles } from "./operation";

const filesInitialState = {
  isLoading: false,
  error: null,
  files: [],
};

const FilesSlice = createSlice({
  name: "files",
  initialState: filesInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(AddFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.files.push(action.payload);
      })
      .addCase(AddFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(GetFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.files = action.payload
      })
      .addCase(GetFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(DeleteFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.files = state.files.filter(file => file.id !== action.payload)
      })
      .addCase(DeleteFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export const FilesReducer = FilesSlice.reducer