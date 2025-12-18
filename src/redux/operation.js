import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

      const response = await axios.post("http://127.0.0.1:8000/add", formData);

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
        `http://127.0.0.1:8000/delete/${UserId}`
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
      const response = await axios.get("http://127.0.0.1:8000/users");

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
        `http://127.0.0.1:8000/procces-image/${id}`,
        null, {
          params: {width_r}
        }
      );
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
