import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const itemName = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.name === itemName
      );

      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.name !== itemName
          );
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export {cartSlice};
