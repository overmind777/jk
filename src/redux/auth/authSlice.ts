import {createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {loginThunk, registerThunk} from './operations.ts';
import {AuthState} from '../../helpers/types.ts';

const initialState: AuthState = {
    user: {
        name: '',
        email: '',
        tokens: {
            accessToken: '',
            refreshToken: '',
        },
    },
    isAuthenticated: false,
    isAdmin: false,
    error: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user.name = '';
            state.user.email = ''
            state.user.tokens = { accessToken: '', refreshToken: '' };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerThunk.fulfilled, (state, {payload}) => {
            state.user.name = payload.user.name
            state.user.email = payload.user.email
            state.user.tokens = state.user.tokens || { accessToken: '', refreshToken: '' };
            state.isAuthenticated = true;
            state.isAdmin = false;
        })
            .addCase(loginThunk.fulfilled, (state, {payload}) => {
                state.user.name = payload.user.name
                state.user.email = payload.user.email

                state.user.tokens.accessToken = payload.tokens.accessToken
                state.user.tokens.refreshToken = payload.tokens.refreshToken
                state.isAuthenticated = true;
            })
            .addMatcher(isAnyOf(
                registerThunk.rejected,
                loginThunk.rejected,
            ), (state, action: PayloadAction<unknown>) => {
                state.error = action.payload as string || 'Something went wrong. Please try again.';
            })
    }
})

export const authReducer = authSlice.reducer;