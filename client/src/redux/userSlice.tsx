import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    reloadUser: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    reloadUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, reloadUserData } = userSlice.actions;
