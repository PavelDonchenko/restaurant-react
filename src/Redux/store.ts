import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './Slices/categorySlice';
import cart from './Slices/cartSlice';
import dish from './Slices/dishSlice';
import search from './Slices/searchSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    categorySlice,
    cart,
    dish,
    search
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch