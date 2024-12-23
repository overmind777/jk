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
    { emailUser: string, token: string, userData: UserState },
    AsyncThunkConfig
>(
    'editUserData',
    async ({emailUser, token, userData}, thunkApi) => {
        try {
            const {data} = await userApi.patch('/users/edit', {emailUser, ...userData},
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