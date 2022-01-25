import {configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';




const store = configureStore({
  reducer: { ui: uiReducer , cart : cartReducer},
});

export default store;

// 2 slices
// first manages cart
// second for ui logic - toggling