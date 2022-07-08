import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './Slices/categorySlice';
import cart from './Slices/cartSlice';

export const store = configureStore({
  reducer: {
    categorySlice,
    cart
  }
})