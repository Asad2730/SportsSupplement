import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL, config } from '../../utils/helpers';

const { ProductList } = require('../../proto/ProductList_pb');



const url = DB_URL+'/products';

export const getProducts = createAsyncThunk(
    'home/getProducts',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(getProducts.pending());
            const { data } = await axios.get(url, config);
            const arrayBuffer = new Uint8Array(data);
            const productList = ProductList.deserializeBinary(arrayBuffer);
            const products = productList.getProductsList();
            thunkAPI.dispatch(getProducts.fulfilled(products));
            return products;

        } catch (ex) {
            thunkAPI.dispatch(getProducts.rejected(ex));
            throw ex;
        }
    }
);
