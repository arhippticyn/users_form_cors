import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000'

export const AddUsers = createAsyncThunk(
  "users/AddUsers",
  async (user, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("password", user.password);
      formData.append("date_born", user.date_born);
      formData.append("sex", user.sex);
      formData.append("file", user.file);

      const response = await axios.post("/add", formData);

      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteUsers = createAsyncThunk(
  "users/DeleteUsers",
  async (UserId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `/delete/${UserId}`
      );
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const FetchUsers = createAsyncThunk(
  "users/FetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");

      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const ProccessImage = createAsyncThunk(
  "users/ProccessImage",
  async ({ id, width_r }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/procces-image/${id}`,
        null,
        {
          params: { width_r },
        }
      );
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const PatchUsers = createAsyncThunk(
  "users/PatchUsers",
  async ({ id, newUsername }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/patch/${id}`, {
        newUsername,
      });
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AddFile = createAsyncThunk(
  "files/AddFile",
  async ({ file, userId }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        `/files-add/${userId}`,
        formData
      );

      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetFiles = createAsyncThunk(
  'files/GetFiles',
  async (_, { rejectWithValue}) => {
    try {
      const response = await axios.get('/files')
      return await response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const DeleteFiles = createAsyncThunk('files/DeleteFiles', async (FilesId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/delete-files/${FilesId}`)

    return await response.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})