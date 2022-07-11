import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './Slices/categorySlice';
import cart from './Slices/cartSlice';
import dish from './Slices/dishSlice';

export const store = configureStore({
  reducer: {
    categorySlice,
    cart,
    dish
  }
})