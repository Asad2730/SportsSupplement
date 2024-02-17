import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DB_URL ,config} from '../../utils/helpers';

const { User } = require('../../proto/User_pb')




const url = DB_URL+'/auth';

export const signUp = createAsyncThunk(
    'auth/signup',
    async ({ email, password }, thunkAPI) => {
        try {
            thunkAPI.dispatch(signUp.pending())
            const user = new User();
            user.setEmail(email)
            user.setPassword(password)
            const serializedData = user.serializeBinary();
            const { data } = await axios.post(url, serializedData, config)
            const decodedUser = User.deserializeBinary(data);
            thunkAPI.dispatch(signUp.fulfilled(decodedUser));
            return decodedUser;
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
            const { data } = await axios.get(url, serializedData, config)

            const uint8Array = new Uint8Array(data);
            const decodedUser = User.deserializeBinary(uint8Array);
            const response = decodedUser.toObject();
            thunkAPI.dispatch(login.fulfilled(response));

            return response;
        } catch (ex) {

            thunkAPI.dispatch(login.rejected(ex))
            throw ex;
        }
    }
)