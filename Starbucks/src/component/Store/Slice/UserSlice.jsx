import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = UserSlice.actions;
export { UserSlice };
