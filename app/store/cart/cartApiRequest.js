import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL, config } from '../../utils/helpers';
const { Cart } = require('../../proto/Cart_pb');
const { CartList } = require('../../proto/CartList_pb')

const url = DB_URL + '/cart';

export const createCart = createAsyncThunk(
    'cart/createCart',
    async ({ id, useremail, totalBill, orderDate, pids }, thunkAPI) => {
        try {

            thunkAPI.dispatch(createCart.pending());
            const cart = new Cart();
            cart.setId(id);
            cart.setUseremail(useremail);
            cart.setTotalbill(totalBill);
            cart.setOrderdate(orderDate);
            const pidArray = new Uint8Array(pids);
            cart.setPids(pidArray);
            const serializedData = cart.serializeBinary();
            const { data } = await axios.post(url, serializedData, config);
            const response = Cart.deserializeBinary(data);
            thunkAPI.dispatch(createCart.fulfilled(response));
            return data;
        } catch (ex) {

            thunkAPI.dispatch(createCart.rejected(ex));
            throw ex;
        }
    }
);


export const getUserHistory = createAsyncThunk(
    'cart/getUserHistory',
    async (email, thunkAPI) => {
        try {
            thunkAPI.dispatch(getUserHistory.pending());
            const { data } = await axios.get(`${url}/${email}`, config);
            const uint8Array = new Uint8Array(data);
            const carts = CartList.deserializeBinary(uint8Array);
            const result = carts.getCartsList();
            thunkAPI.dispatch(getUserHistory.fulfilled(result));
            return result;

        } catch (ex) {

            thunkAPI.dispatch(getUserHistory.rejected(ex));
            throw ex;
        }
    }
);


