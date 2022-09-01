import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CategorySlice = {
  activeCategories: number;
};
const initialState: CategorySlice = {
  activeCategories: 0,
};

const categorySlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategories(state, action: PayloadAction<number>) {
      state.activeCategories = action.payload;
    },
  },
});

export const { setActiveCategories } = categorySlice.actions;

export default categorySlice.reducer;
