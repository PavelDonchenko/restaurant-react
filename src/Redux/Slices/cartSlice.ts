import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Items = {
  category: number;
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  text: string;
  count: number;
  weight: number;
};

interface CartSliceState {
  totalPrice: number;
  items: Items[];
  totalCount: number;
  cartItemsAddtoCart: Items[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
  cartItemsAddtoCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItemsToCart(state, action: PayloadAction<Items>) {
      const findItemsInCart = state.cartItemsAddtoCart.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItemsInCart) {
        findItemsInCart.count++;
      } else {
        state.cartItemsAddtoCart.push({ ...action.payload, count: 1 });
      }
    },
    addItems(state, action: PayloadAction<Items>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    plusItems(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems) {
        findItems.count++;
        state.totalPrice += findItems.price;
      }
    },
    minusItems(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems && findItems.count > 0) {
        findItems.count--;
        state.totalPrice -= findItems.price;
        state.totalCount -= 1;
      }
      if (findItems && findItems.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
    removeItems(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      if (findItems) {
        state.totalPrice -= findItems.price * findItems.count;
      }
    },
  },
});

export const {
  addItems,
  minusItems,
  plusItems,
  removeItems,
  addCartItemsToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
