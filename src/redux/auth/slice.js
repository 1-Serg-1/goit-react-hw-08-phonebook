import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";
import { toast } from 'react-toastify';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state) => { state.isLoading = true })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            toast.warn(`${action.payload}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .addCase(logIn.pending, (state) => { state.isLoading = true })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        })
        .addCase(logIn.rejected, (state, action) => {
            state.isLoading = false;
            toast.warn(`${action.payload}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            },);
        })
        .addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, (action) => {
            toast.warn(`${action.payload}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            },);
        })
        .addCase(refreshUser.pending, (state) => { state.isRefreshing = true })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => { state.isRefreshing = false }),
});

export const authReducer = authSlice.reducer;