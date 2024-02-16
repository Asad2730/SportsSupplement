import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        selected_products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // Ensure payload is an array even if it's a single item
            const itemsToAdd = Array.isArray(action.payload) ? action.payload : [action.payload];
            state.cart.push(...itemsToAdd);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item !== action.payload);
            if(state.selected_products.length > 0){
                state.selected_products = state.selected_products.filter(item => item.id !== action.payload);
            }    
        },
        getSelectedProducts: (state, action) => {
            state.selected_products = action.payload.filter((product) => state.cart.includes(product.id))
                .map((product) => ({
                    ...product,
                    qty: 1,
                }))
        },
        incrementQty: (state, action) => {
            const { id } = action.payload;
            const product = state.selected_products.find(item => item.id === id);
            if (product) {
                product.qty += 1;
            }
        },

        decrementQty: (state, action) => {
            const { id } = action.payload;
            const product = state.selected_products.find(item => item.id === id);
            if (product && product.qty > 1) {
                product.qty -= 1;
            }
        },
        clearCart: (state, action) => {
            state.cart = []
            state.selected_products = []
        }
    }
})


export const { addToCart, removeFromCart, clearCart ,getSelectedProducts,incrementQty,decrementQty} = cartSlice.actions;
export default cartSlice.reducer