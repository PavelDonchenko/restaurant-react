import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Items } from "./cartSlice";

type FetchDishArg = {
  search: string;
};

interface DishSliceState {
  status: "loading" | "succes" | "error";
  dishItems: Items[];
}

export const fetchDish = createAsyncThunk(
  "dish/fetchDishStatus",
  async (params: FetchDishArg) => {
    const { search } = params;
    const dishesItemResponse = await axios.get<Items[]>(
      `https://62ba0099ff109cd1dc9f5a3f.mockapi.io/dishes${search}`
    );
    return dishesItemResponse.data;
  }
);

const initialState: DishSliceState = {
  dishItems: [],
  status: "loading",
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setDishes(state, action: PayloadAction<Items[]>) {
      state.dishItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDish.pending, (state) => {
      state.status = "loading";
      state.dishItems = [];
    });
    builder.addCase(fetchDish.fulfilled, (state, action) => {
      state.dishItems = action.payload;
      state.status = "succes";
    });
    builder.addCase(fetchDish.rejected, (state) => {
      state.status = "error";
      state.dishItems = [];
    });
  },
});

export const { setDishes } = dishSlice.actions;

export default dishSlice.reducer;
