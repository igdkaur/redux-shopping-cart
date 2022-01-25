import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState:initialCartState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});


export const cartActions = uiSlice.actions;
export default uiSlice.reducer;
