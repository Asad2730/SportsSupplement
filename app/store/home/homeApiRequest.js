import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL } from '../../utils/helpers';

const { ProductList } = require('../../proto/ProductList_pb');
const { Product } = require('../../proto/Product_pb');

const config = {
    headers: {
        'Content-Type': 'application/protobuf',
    },
    responseType: 'arraybuffer',
}

export const getProducts = createAsyncThunk(
    'home/getProducts',
    async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(getProducts.pending());
            const { data } = await axios.get(`${DB_URL}/getProducts`, config);
            const arrayBuffer = new Uint8Array(data);
            const productList = ProductList.deserializeBinary(arrayBuffer);
             let products = new Product();
            products = productList.getProductsList();
            thunkAPI.dispatch(getProducts.fulfilled(products));
            return products;

        } catch (ex) {
            thunkAPI.dispatch(getProducts.rejected(ex));
            throw ex;
        }
    }
);