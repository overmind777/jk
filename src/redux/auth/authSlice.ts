import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations.ts';
import { ApiResponse, AuthState } from '../../helpers/types.ts';

const initialState: AuthState = {
    user: {
        username: '',
        email: '',
        tokens: {
            accessToken: '',
            refreshToken: '',
        },
    },
    isAuthenticated: false,
    isAdmin: false,
    isLogin: true,
    error: null,
};

const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        logout: ( state ) => {
            state.isAuthenticated = false;
            state.user.username = '';
            state.user.email = '';
            state.user.tokens = { accessToken: '', refreshToken: '' };
        },
    },
    extraReducers: ( builder ) => {
        builder.addCase( registerThunk.fulfilled, ( state, { payload }: PayloadAction<ApiResponse> ) => {
            state.user.username = payload.user.username;
            state.user.email = payload.user.email;
            state.isAdmin = false;
            state.isAuthenticated = true;
        } )
            .addCase( loginThunk.fulfilled, ( state, { payload }: PayloadAction<ApiResponse> ) => {
                state.user.username = payload.user.username;
                state.user.email = payload.user.email;

                if (state.user.tokens) {
                    state.user.tokens.accessToken = payload.user.tokens.accessToken;
                    state.user.tokens.refreshToken = payload.user.tokens.refreshToken;
                }
                state.isLogin = true;
            } )
            .addMatcher( isAnyOf(
                registerThunk.rejected,
                loginThunk.rejected,
            ), ( state, { payload }: PayloadAction<unknown> ) => {
                state.error = payload as string || 'An unexpected error occurred';
                state.isAuthenticated = false;
            } )
            .addMatcher( isAnyOf(
                registerThunk.pending,
                loginThunk.pending,
            ), ( state) => {
                state.error = null;
            } );
    },
} );

export const authReducer = authSlice.reducer;