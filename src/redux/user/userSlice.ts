import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { User, UserState } from '../../helpers/types.ts';
import { createUserData, editUserData } from './operations.ts';

const initialState: UserState = {
    username: '',
    certificateNumber: '',
    email: '',
    bio: '',
    location: '',
    website: '',
    links: [{ id: '', link: '', url: '' }],
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
            .addCase( createUserData.fulfilled, (state: UserState, {payload}: PayloadAction<UserState>)=>{
                Object.assign( state, payload );
            })
            .addCase( editUserData.fulfilled, ( state: UserState, { payload }: PayloadAction<UserState> ) => {
                Object.assign( state, payload );
            } )
            .addMatcher( isAnyOf( editUserData.rejected, createUserData.rejected ), ( state: UserState, { payload }: PayloadAction<unknown> ) => {
                console.log('Something went wrong. Please try again.');
            } );
    },
} );

export const userReducer = userSlice.reducer;
export const selectUser = ( state: RootState ) => state.user;
export const { setUser, logout } = userSlice.actions;