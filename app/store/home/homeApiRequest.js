import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL } from '../../utils/helpers';

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
            console.log('Response data:', data);

            const products = [];
            let offset = 0;
            while (offset < data.length) {
                const length = new DataView(data.buffer, offset, 4).getUint32();
                const productData = data.subarray(offset + 4, offset + 4 + length);
                const product = Product.deserializeBinary(productData);
                products.push(product.toObject());
                offset += length + 4;
            }

            console.log('Received products Length:', products.length);
            console.log('Received products:', products);

            thunkAPI.dispatch(getProducts.fulfilled(products));
            return products;

        } catch (ex) {
            console.log('Error fetching products:', ex);
            thunkAPI.dispatch(getProducts.rejected(ex));
            throw ex;
        }
    }
);
