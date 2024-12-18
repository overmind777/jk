import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { User, UserState } from '../../helpers/types.ts';
import { editUserData } from './operations.ts';

const initialState: UserState = {
    username: '',
    certificateNumber: '',
    email: '',
    bio: '',
    location: '',
    website: '',
    links: [{ link: '', url: '' }],
    error: '',
};

const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        setUser: ( state, action: PayloadAction<User> ) => {
            state.username = action.payload.username;
            state.email = action.payload.email;

        },
        logout: () => initialState,
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( editUserData.fulfilled, ( state: UserState, { payload }: PayloadAction<UserState> ) => {
                Object.assign( state, payload );
                state.error = '';
            } )
            .addMatcher( isAnyOf( editUserData.rejected ), ( state: UserState, { payload }: PayloadAction<unknown> ) => {
                state.error = payload as string || 'Something went wrong. Please try again.';
            } );
    },
} );

export const userReducer = userSlice.reducer;
export const selectUser = ( state: RootState ) => state.user;
export const { setUser, logout } = userSlice.actions;