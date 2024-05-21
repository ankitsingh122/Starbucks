import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Slice/UserSlice";
import {authSlice} from "./Slice/Auth";



const store = configureStore({
  reducer: {
    users: UserSlice.reducer,
    auth: authSlice.reducer,
   
  },
});
export default store;
