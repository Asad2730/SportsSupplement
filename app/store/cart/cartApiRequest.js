import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL, config } from '../../utils/helpers';

const { Cart } = require('../../proto/Cart_pb');
const { CartList } = require('../../proto/CartList_pb');

const url = DB_URL + '/cart';

export const createCart = createAsyncThunk(
    'cart/createCart',
    async ({id,useremail,pids,totalBill,orderDate}, thunkAPI) => {
        try {
            thunkAPI.dispatch(addToCart.pending());
            const cart = new Cart();
            cart.setId(id);
            cart.setUseremail(useremail);
            cart.setPidsList(pids);
            cart.setTotalbill(totalBill);
            cart.setOrderdate(orderDate);
            
            const serializedData = cart.serializeBinary();
            const { data } = await axios.post(url,serializedData, config);
            const response = cart.deserializeBinary(data);
            thunkAPI.dispatch(addToCart.fulfilled(response));
            return data;
        } catch (ex) {
            thunkAPI.dispatch(addToCart.rejected(ex));
            throw ex;
        }
    }
);


export const getUserHistory = createAsyncThunk(
    'cart/getUserHistory',
    async (email, thunkAPI) => {
        try {
            thunkAPI.dispatch(getUserHistory.pending());
            const { data } = await axios.post(`${url}/${email}`, config);
            const arrayBuffer = new Uint8Array(data);
            const cartList = CartList.deserializeBinary(arrayBuffer);
            let carts = new Cart();
            carts = cartList.getCartsList();
            thunkAPI.dispatch(addToCart.fulfilled(carts));
            return carts;
        } catch (ex) {
            thunkAPI.dispatch(addToCart.rejected(ex));
            throw ex;
        }
    }
);