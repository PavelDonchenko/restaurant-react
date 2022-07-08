import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    items: [],
    totalCount: 0
    
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems(state, action) {
            const findItems = state.items.find(obj => obj.id === action.payload.id);
            if (findItems) {
                findItems.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, item) => {
                return (item.price * item.count) + sum
            }, 0)
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0)
        },
        plusItems(state, action) {
            const findItems = state.items.find(obj => obj.id === action.payload)
            if(findItems){
                findItems.count++;
                state.totalPrice += findItems.price
            }
        },
        minusItems(state, action) {
            const findItems = state.items.find(obj => obj.id === action.payload)
            if(findItems && findItems.count > 0){
                findItems.count--;
                state.totalPrice -= findItems.price
            }
        },
        removeItems(state, action){
            state.items = state.items.filter(obj => obj.id !== action.payload)
        }

    }
})

export const { addItems, minusItems, plusItems, removeItems } = cartSlice.actions;

export default cartSlice.reducer;