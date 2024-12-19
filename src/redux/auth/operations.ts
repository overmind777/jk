import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ApiResponse, LoginCredentials, RegisterCredentials} from "../../helpers/types.ts";

export const userApi = axios.create({
    baseURL: "http://localhost:3000",
})

export const registerThunk = createAsyncThunk <ApiResponse, RegisterCredentials>(
    'register',
    async (credentials, thunkApi) => {
        try {
            const {data} = await userApi.post('/auth/register', credentials)
            return data
        } catch (error) {
            if (error instanceof Error && typeof error.message === "string") {
                return thunkApi.rejectWithValue(error.message);
            }
        }
    }
)

export const loginThunk = createAsyncThunk<ApiResponse, LoginCredentials>(
    'login',
    async (credential, thunkApi) => {
        try{
            const {data} = await userApi.post('/auth/login', credential)
            return data
        } catch (error) {
            if (error instanceof Error && typeof error.message === "string") {
                return thunkApi.rejectWithValue(error.message);
            }
        }
    }
)