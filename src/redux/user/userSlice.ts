import { createSlice } from "@reduxjs/toolkit"
import {RootState} from "../store.ts";

const initialState = {
    user: {
        email: '',
        info: '',
        isLogin: false,
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        isLogin: (state, {payload}) => {
            state.user.isLogin = payload
        }
    }
})

export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
export const {isLogin} = userSlice.actions;