import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store.ts";
import {AxiosError} from "axios";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const handleError = (error: unknown): string =>{
    if (error instanceof AxiosError && error.response) {
        console.log(error.response);
        return error.response.data.message || 'An error occurred';
    } else if (error instanceof Error) {
        return error.message;
    } else if (typeof error === 'string') {
        return error;
    }
    return 'An unexpected error occurred';
}