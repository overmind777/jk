import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '../../helpers/types.ts';
import { userApi } from '../auth/operations.ts';
import { AppDispatch, RootState } from '../store.ts';

export interface AsyncThunkConfig {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
}

export const createUserData = createAsyncThunk<
    UserState,
    { token: string },
    AsyncThunkConfig
>(
    'createUserData',
    async ( token, thunkApi ) => {
        try {
            const { data } = await userApi.post( '/users/create', null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            } );
            return data;
        } catch (error) {
            if (error instanceof Error && typeof error.message === 'string') {
                return thunkApi.rejectWithValue( error.message );
            }
        }
    },
);

export const editUserData = createAsyncThunk<
    UserState,
    { email: string, userData: Partial<UserState> },
    AsyncThunkConfig
>(
    'editUserData',
    async ( { email, userData }, thunkApi ) => {
        try {
            const { data } = await userApi.patch( '/users/edit', { email, userData } );
            return data;
        } catch (error) {
            if (error instanceof Error && typeof error.message === 'string') {
                return thunkApi.rejectWithValue( error.message );
            }
        }
    },
);