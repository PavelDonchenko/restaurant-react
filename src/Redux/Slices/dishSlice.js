import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchDish = createAsyncThunk('dish/fetchDishStatus', async (params) => {
    const { search } = params;
    const dishesItemResponse = await axios.get(`https://62ba0099ff109cd1dc9f5a3f.mockapi.io/dishes${search}`);
    return dishesItemResponse.data
})

const initialState = {
    dishItems: [],
    status: 'loading'

}

const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
        setDishes(state, action) {
            state.dishItems = action.payload
        }
    },
    extraReducers: {
        [fetchDish.pending]: (state) => {
          state.status = 'loading'
          state.dishItems = []
        },
        [fetchDish.fulfilled]: (state, action) => {
          state.dishItems = action.payload
          state.status = 'succes'
        },
        [fetchDish.rejected]: (state) => {
          state.status = 'error'
          state.dishItems = []
        }   
      }
})

export const { setDishes } = dishSlice.actions;

export default dishSlice.reducer;