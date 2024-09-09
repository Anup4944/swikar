import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numItm: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    updateItems: (state) => {
      state.numItm = state.numItm + 1;
    },
  },
});

export const { updateItems } = cartSlice.actions;
