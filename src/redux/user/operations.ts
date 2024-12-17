import {createAsyncThunk} from "@reduxjs/toolkit";
import { CustomResponse, RegisterCredentials} from "../../helpers/types.ts";
import {userApi} from "../auth/operations.ts";

export const editUserData = createAsyncThunk<CustomResponse, RegisterCredentials>(
    'editUserData',
    async (credentials, thunkApi) => {
        try{
            console.log(credentials)
            const {data} = await userApi.post('/user/edit', credentials)
            return data
        } catch (error) {
            if (error instanceof Error && typeof error.message === "string") {
                return thunkApi.rejectWithValue(error.message);
            }
        }
    }
)