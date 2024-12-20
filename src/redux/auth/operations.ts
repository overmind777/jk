import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {ApiError, LoginCredentials, RegisterCredentials, Tokens, User} from "../../helpers/types.ts";

export const userApi = axios.create({
    baseURL: "http://localhost:3000",
})

export const registerThunk = createAsyncThunk <User, RegisterCredentials>(
    'register',
    async (credentials, thunkApi) => {
        try {
            const {data} = await userApi.post('/auth/register', credentials)
            return data
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                return thunkApi.rejectWithValue(error.response.data as ApiError);
            }
            return thunkApi.rejectWithValue({
                message: 'An unexpected error occurred',
            });
        }
    }
)

export const loginThunk = createAsyncThunk<Tokens, LoginCredentials>(
    'login',
    async (credential, thunkApi) => {
        try{
            const {data} = await userApi.post('/auth/login', credential)
            return data
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                return thunkApi.rejectWithValue(error.response.data as ApiError);
            }
            return thunkApi.rejectWithValue({
                message: 'An unexpected error occurred',
            });
        }
    }
)