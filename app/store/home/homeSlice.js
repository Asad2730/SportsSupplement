import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './homeApiRequest';


const homeSlice = createSlice({
    name: 'home',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
       builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.error = null;
            state.loading = false;
             //serializable..
             //in product.proto.js file to get values of fields get methods are define e.g getId() for Id
             state.products = action.payload.map(product => ({
                id: product.getId(),
                name: product.getName(),
                image:product.getImage(),
                description:product.getDescription(),
                price:product.getPrice()
            }));
       })
       builder.addCase(getProducts.pending,(state,action)=>{
          state.error = null;
          state.loading = true;
       })
       builder.addCase(getProducts.rejected,(state,action)=>{
        state.error = action.error.message;
        state.loading = false;
     })
    }
});

export default homeSlice.reducer;