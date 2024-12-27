import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations.ts';
import { AuthState, Tokens, User } from '../../helpers/types.ts';

const initialState: AuthState = {
    user: {
        username: '',
        email: '',
    },
    tokens: {
        accessToken: '',
        refreshToken: '',
    },
    isAuthenticated: false,
    isAdmin: false,
    isLogin: false,
    error: null,
};

const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        login: ( state, { payload } ) => {
            state.user.email = payload.email || state.user.email;
            if (payload.status === 200) {
                state.isLogin = true;
            } else {
                state.isLogin = false;
            }
        },
        logout: ( state ) => {
            state.isAuthenticated = false;
            state.user.username = '';
            state.user.email = '';
            state.tokens = { accessToken: '', refreshToken: '' };
            state.isLogin = false;
        },
    },
    extraReducers: ( builder ) => {
        builder.addCase( registerThunk.fulfilled, ( state, { payload }: PayloadAction<User> ) => {
            state.user.username = payload.username;
            state.user.email = payload.email;
            state.isAdmin = false;
            state.isAuthenticated = true;
            state.isLogin = false;
        } )
            .addCase( loginThunk.fulfilled, ( state, { payload }: PayloadAction<Tokens> ) => {
                state.tokens.accessToken = payload.accessToken;
                state.tokens.refreshToken = payload.refreshToken;
                state.isLogin = true;
            } )
            .addCase( logoutThunk.fulfilled, ( state ) => {
                state.user.username = '';
                state.user.email = '';
                state.tokens.accessToken = '';
                state.tokens.refreshToken = '';
                state.isLogin = false;
            } )
            .addCase( refreshThunk.fulfilled, ( state, { payload } ) => {
                state.tokens.accessToken = payload.accessToken;
                state.tokens.refreshToken = payload.refreshToken;
            } )
            .addMatcher( isAnyOf(
                registerThunk.rejected,
                loginThunk.rejected,
                logoutThunk.rejected,
                refreshThunk.rejected,
            ), ( state, { payload }: PayloadAction<unknown> ) => {
                state.error = payload as string || 'An unexpected error occurred';
                state.isAuthenticated = false;
            } )
            .addMatcher( isAnyOf(
                registerThunk.pending,
                loginThunk.pending,
                logoutThunk.pending,
                refreshThunk.pending,
            ), ( state ) => {
                state.error = null;
            } );
    },
} );

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;