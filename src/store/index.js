import {configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-slice';



const store = configureStore({
  reducer: { ui: uiReducer },
});

export default store;

// 2 slices
// first manages cart
// second for ui logic - toggling