import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../store.ts";
import { UserState } from '../../helpers/types.ts';

const initialState: UserState = {
    name: '',
    email: '',
    isLogin: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Встановлення даних користувача при логіні
        setUser: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLogin = true;
        },
        // Скидання даних користувача при логауті
        logout: () => initialState,
    }
})

export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
export const {setUser, logout} = userSlice.actions;