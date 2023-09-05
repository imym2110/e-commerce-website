import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cartslice",
  initialState: { products: [], totalItems: 0 }, // Changed 'product' to 'products'
  reducers: {
    // Changed 'reducer' to 'reducers'
    test(state, action) {
      console.log("hello");
    },
    addToCart(state, action) {
      state.products.push(action.payload); // Push the new product into the 'products' array
      state.totalItems += 1; // Increment the totalItems by 1
    },
    removeFromCart(state, action) {
      console.log("------>");
      state.products = state.products.filter(
        (item) => item.randomID * 1 != action.payload.id * 1
      );
      state.totalItems = state.totalItems * 1 - 1;
    },
  },
});

export const { test, addToCart, removeFromCart } = cartSlice.actions; // Added 'test' action
export const cartSliceReducer = cartSlice.reducer; // Changed 'cartSlices' to 'cartSliceReducer'
