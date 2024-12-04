import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET @ /posts
export const fetchPosts = createAsyncThunk("posts", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/posts");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
