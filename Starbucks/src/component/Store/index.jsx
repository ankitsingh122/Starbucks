import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Slice/UserSlice";
import {authSlice} from "./Slice/Auth";
import { cartSlice } from "./Slice/Cart";



const store = configureStore({
  reducer: {
    users: UserSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
   
  },
});
export default store;
