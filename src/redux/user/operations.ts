import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserState} from '../../helpers/types.ts';
import {userApi} from '../auth/operations.ts';
import {AppDispatch, RootState} from '../store.ts';

export interface AsyncThunkConfig {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
}

export const createUserData = createAsyncThunk<
    UserState,
    string,
    AsyncThunkConfig
>(
    'createUserData',
    async (email, thunkApi) => {
        try {
            const {data} = await userApi.post('/users/create', {email});
            return data;
        } catch (error) {
            if (error instanceof Error && typeof error.message === 'string') {
                return thunkApi.rejectWithValue(error.message);
            }
        }
    },
);

export const editUserData = createAsyncThunk<
    UserState,
    { email: string, token: string, userData: Partial<UserState> },
    AsyncThunkConfig
>(
    'editUserData',
    async ({email, token, userData}, thunkApi) => {
        console.log({email, token, userData})
        try {
            const {data} = await userApi.patch('/users/edit', {email, ...userData},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return data;
        } catch (error) {
            if (error instanceof Error && typeof error.message === 'string') {
                return thunkApi.rejectWithValue(error.message);
            }
        }
    },
);