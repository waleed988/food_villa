import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      return { items: [] };
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
