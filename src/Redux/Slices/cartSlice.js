import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    items: [],
    totalCount: 0,
    cartItemsAddtoCart: []

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItemsToCart(state, action) {
            const findItemsInCart = state.cartItemsAddtoCart.find(obj => obj.id === action.payload.id);
            if (findItemsInCart) {
                findItemsInCart.count++
            } else {
                state.cartItemsAddtoCart.push({ ...action.payload, count: 1 })

            }

        },
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
            if (findItems) {
                findItems.count++;
                state.totalPrice += findItems.price
            }
        },
        minusItems(state, action) {
            const findItems = state.items.find(obj => obj.id === action.payload)
            if (findItems && findItems.count > 0) {
                findItems.count--;
                state.totalPrice -= findItems.price
            }
        },
        removeItems(state, action) {
            const findItems = state.items.find(obj => obj.id === action.payload)
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice -= findItems.price * findItems.count
        }

    }
})

export const { addItems, minusItems, plusItems, removeItems, addCartItemsToCart } = cartSlice.actions;

export default cartSlice.reducer;