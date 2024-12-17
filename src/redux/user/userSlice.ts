import {createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store.ts";
import {CustomResponse, UserState} from '../../helpers/types.ts';
import {editUserData} from "./operations.ts";

const initialState: UserState = {
    name: '',
    city: '',
    email: '',
    about: '',
    error: '',
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;

        },
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(editUserData.fulfilled, (state: UserState, {payload}: PayloadAction<CustomResponse>) => {
                state.name = payload.name;
                state.city = payload.city;
                state.email = payload.email;
                state.about = payload.about;
            })
            .addMatcher(isAnyOf(editUserData.rejected), (state: UserState, {payload}: PayloadAction<unknown>) => {
                state.error = payload as string || 'Something went wrong. Please try again.';
            })
    }
})

export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
export const {setUser, logout} = userSlice.actions;