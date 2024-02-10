import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL } from '../../utils/helpers';

const { User } = require('../../proto/User_pb')


const config = {
    headers: {
        'Content-Type': 'application/protobuf',
    }
}

export const signUp = createAsyncThunk(
    'auth/signup',
    async ({ email, password }, thunkAPI) => {
        try {
            thunkAPI.dispatch(signUp.pending())
            const user = new User();
            user.setEmail(email)
            user.setPassword(password)
            const serializedData = user.serializeBinary();
            const { data } = await axios.post(`${DB_URL}/signup`, serializedData, config)
            thunkAPI.dispatch(signUp.fulfilled(data))
            return data;
        } catch (ex) {
            thunkAPI.dispatch(signUp.rejected(ex));
            throw ex;
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        try {
            thunkAPI.dispatch(login.pending())
            const user = new User();
            user.setEmail(email)
            user.setPassword(password)
            const serializedData = user.serializeBinary();
            const { data } = await axios.post(`${DB_URL}/login`, serializedData, config)
            thunkAPI.dispatch(login.fulfilled(data))
            return data;
        } catch (ex) {
            thunkAPI.dispatch(login.rejected(ex))
            throw ex;
        }
    }
)