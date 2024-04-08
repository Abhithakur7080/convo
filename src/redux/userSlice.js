import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFirestore } from "../config/Build/firestore";

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async (userId, { rejectWithValue }) => {
    try {
      const store = useFirestore();
      const data = await store.getAllDocsFromFirestore("users");
      const filteredData = data.filter((u) => u.uid !== userId);
      return filteredData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const searchUsers = createAsyncThunk(
  "user/searchUsers",
  async (query, { rejectWithValue, getState }) => {
    try {
      const { users } = getState().userReducer;
      console.log(users);
      const filteredData = users.filter((user) =>
        user.displayName.toLowerCase().includes(query.toLowerCase())
      );
      return filteredData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    searchedUsers: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {})
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {})
      .addCase(searchUsers.pending, (state) => {})
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.searchedUsers = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {});
  },
});

export const userReducer = userSlice.reducer;
export const userSelector = (state) => state.userReducer;
