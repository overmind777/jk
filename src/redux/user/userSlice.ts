import {createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store.ts';
import {UserState} from '../../helpers/types.ts';
import {createUserData, editUserData, getUserData} from './operations.ts';

const initialState: UserState = {
    username: '',
    certificateNumber: '',
    email: '',
    bio: '',
    location: '',
    website: '',
    links: [{link: '', url: ''}],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUserData.fulfilled, (state: UserState, {payload}: PayloadAction<UserState>) => {
                return { ...state, ...payload };
            })
            .addCase(getUserData.fulfilled, (state: UserState, {payload}: PayloadAction<UserState>) => {
                return { ...state, ...payload };
            })
            .addCase(editUserData.fulfilled, (state: UserState, {payload}: PayloadAction<UserState>) => {
                console.log(payload)
                return { ...state, ...payload };
            })
            .addMatcher(isAnyOf(editUserData.rejected, createUserData.rejected, getUserData.rejected, editUserData.pending, createUserData.pending, getUserData.pending), (state, {payload}) => {
                console.log('error', state);
                console.log('error', payload);
            });
    },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;