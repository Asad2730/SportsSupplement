import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL, config } from '../../utils/helpers';


const { Cart } = require('../../proto/Cart_pb');
const { CartProduct } = require('../../proto/CartProduct_pb');

const { HistoryList } = require('../../proto/HistoryList_pb')

const url = DB_URL + '/cart';

export const createCart = createAsyncThunk(
    'cart/createCart',
    async ({ id, useremail, totalBill, orderDate }, thunkAPI) => {
        try {
           
            thunkAPI.dispatch(createCart.pending());
            const cart = new Cart();
            cart.setId(id);
            cart.setUseremail(useremail);
            cart.setTotalbill(totalBill);
            cart.setOrderdate(orderDate);
            
            const serializedData = cart.serializeBinary();
            const { data } = await axios.post(url, serializedData, config);
          
            const response = Cart.deserializeBinary(data);
            thunkAPI.dispatch(createCart.fulfilled(response));
            return data;
        } catch (ex) {
            console.log('error',ex)
            thunkAPI.dispatch(createCart.rejected(ex));
            throw ex;
        }
    }
);


export const createCartAssociate = createAsyncThunk(
    'cart/createCartAssociate',
    async ({id, cid, pId}, thunkAPI) => {
        try {
           
            thunkAPI.dispatch(createCartAssociate.pending());

            const cartProduct = new CartProduct()
            cartProduct.setId(id)
            cartProduct.setCid(cid)
            cartProduct.setPid(pId)
        
           const serializedData = cartProduct.serializeBinary();

            const { data } = await axios.post(`${url}/AddCartProduct`, serializedData, config);
            const response = CartProduct.deserializeBinary(data);

            thunkAPI.dispatch(createCartAssociate.fulfilled(response));
            return data;
        } catch (ex) {  
            thunkAPI.dispatch(createCartAssociate.rejected(ex));
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
    
            const history = HistoryList.deserializeBinary(uint8Array);
            const obj = history.toObject();
          
            const result = {
                productList: obj.products.productsList,
                cartList: obj.carts.cartsList
            };

            thunkAPI.dispatch(getUserHistory.fulfilled(result));
            return result;
        } catch (ex) {
            console.log('Err:',ex)
            thunkAPI.dispatch(getUserHistory.rejected(ex));
            throw ex;
        }
    }
);


// const productList = obj.products;
// const cartList = obj.carts;

// // const products = productList.getProductsList();
// // const carts = cartList.getCartsList();

// const historyList = {
//     productList:productList,
//     cartList: cartList
// };