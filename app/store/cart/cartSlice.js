import { createSlice } from '@reduxjs/toolkit';
import { createCart, getUserHistory } from './cartApiRequest';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        selected_products: [],
        user_history:[],
        error:null,
        loading:false
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
            state.user_history = []
        }
    },
    extraReducers:(builder)=>{
         builder.addCase(createCart.fulfilled,(state,action)=>{
            state.error = null;
            state.loading = false;
            state.cart = [];
            state.selected_products = [];
         })
        
         builder.addCase(getUserHistory.fulfilled,(state,action)=>{
            state.error = null;
            state.loading = false;
            state.user_history = action.payload.map(i=>({
               id:i.getId(),
               email:i.getUseremail(),
               pids:i.getPidsList(),
               totalBill:i.getTotalbill(),
               orderDate:i.getOrderdate(),
            }));
         })


         builder.addCase(createCart.pending,(state,action)=>{
            state.error = null;
            state.loading = true;
         })

         builder.addCase(getUserHistory.pending,(state,action)=>{
            state.error = null;
            state.loading = true;
         })


         builder.addCase(createCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
         })

         builder.addCase(getUserHistory.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
         })
    }
})


export const { addToCart, removeFromCart, clearCart ,getSelectedProducts,incrementQty,decrementQty} = cartSlice.actions;
export default cartSlice.reducer