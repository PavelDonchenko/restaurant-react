import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './Slices/categorySlice';
import cart from './Slices/cartSlice';
import dish from './Slices/dishSlice';
import search from './Slices/searchSlice';

export const store = configureStore({
  reducer: {
    categorySlice,
    cart,
    dish,
    search
  }
})