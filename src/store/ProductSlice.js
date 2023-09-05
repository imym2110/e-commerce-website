import { createSlice } from "@reduxjs/toolkit";
import { FAKEDATA } from "../FakeData";

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: [...FAKEDATA.products],
  reducers: {
    searchQuery(state, action) {
      if (action.payload.name == undefined || action.payload.name == "") {
        return [...FAKEDATA.products];
      } else {
        return FAKEDATA.products.filter((product) =>
          product.title
            .toLocaleLowerCase()
            .includes(action.payload.name.toLocaleLowerCase())
        );
      }
    },
  },
});

export const { searchQuery } = productSlice.actions;
export const productSliceReducer = productSlice.reducer;
