import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  countProducts: number;
}

const initialState: CartState = {
  countProducts: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.countProducts += 1;
    },
    clear: (state) => {
      state.countProducts = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clear } = CartSlice.actions;

export default CartSlice.reducer;
