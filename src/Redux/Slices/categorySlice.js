import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeCategories: 0,
}

const categorySlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActiveCategories(state, action) {
            state.activeCategories = action.payload
        },
    }
})

export const { setActiveCategories} = categorySlice.actions;

export default categorySlice.reducer;