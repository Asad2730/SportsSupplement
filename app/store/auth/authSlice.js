import { createSlice } from '@reduxjs/toolkit';
import { login, signUp } from './authApiRequest';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.error = null;
            state.loading = false;
            state.user = null;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
        })

        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(signUp.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;