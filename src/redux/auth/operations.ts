import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {LoginCredentials, RegisterCredentials, Tokens, User} from "../../helpers/types.ts";
import {handleError} from "../../helpers/hooks.ts";

export const userApi = axios.create({
    baseURL: "http://localhost:3000",
})

export const registerThunk = createAsyncThunk<User, RegisterCredentials>(
    'register',
    async (credentials, thunkApi) => {
        try {
            const {data} = await userApi.post('/auth/register', credentials)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(handleError((error as Error).message));
        }
    }
)

export const loginThunk = createAsyncThunk<Tokens, LoginCredentials>(
    'login',
    async (credential, thunkApi) => {
        try {
            const {data} = await userApi.post('/auth/login', credential)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(handleError((error as Error).message));
        }
    }
)

export const logoutThunk = createAsyncThunk<{ message: string }, string>(
    'logout',
    async (credential, thunkApi) => {
        try {
            const {data} = await userApi.post('/auth/logout', null, {
                headers: {
                    Authorization: `Bearer ${credential}`,
                },
            })
            return data
        } catch
            (error) {
            return thunkApi.rejectWithValue(handleError((error as Error).message));
        }
    }
)

export const refreshThunk = createAsyncThunk<Tokens, { credential: string }>(
    'refresh',
    async (credential, thunkApi) => {
        try {
            const {data} = await userApi.post('/auth/refresh', null, {
                headers: {
                    Authorization: `Bearer ${credential}`
                }
            })
            return data
        } catch
            (error) {
            return thunkApi.rejectWithValue(handleError((error as Error).message));
        }
    }
)


