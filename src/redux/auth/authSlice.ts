import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations.ts';
import { AuthState } from '../../helpers/types.ts';

const initialState: AuthState = {
    user: {
        name: '',
        email: '',
    },
    refreshToken: '',
    isAuthenticated: false,
    isAdmin: false,
    error: '',
}

const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder.addCase( registerThunk.fulfilled, ( state, { payload } ) => {
            state.user = payload.user;
            state.refreshToken = payload.token;
            state.isAuthenticated = false;
            state.isAdmin = false;
        } )
            .addCase( loginThunk.fulfilled, ( state, { payload } ) => {
                state.user = payload.user
            } )
            .addMatcher( isAnyOf(
                registerThunk.rejected,
                loginThunk.rejected,
            ), ( state, action: PayloadAction<unknown> ) => {
                state.error = action.payload as string;
            } )
    }
} )

export const authReducer = authSlice.reducer;