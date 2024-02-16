import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // Ensure payload is an array even if it's a single item
            const itemsToAdd = Array.isArray(action.payload) ? action.payload : [action.payload];
            state.cart.push(...itemsToAdd);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item !== action.payload);
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    }
})


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer