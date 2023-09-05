import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./CartSlice";
import { productSliceReducer } from "./ProductSlice";

export const Store = configureStore({
  reducer: {
    cartSlices: cartSliceReducer,
    ProductSlices: productSliceReducer,
  },
});
