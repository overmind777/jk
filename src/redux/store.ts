import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from './auth/authSlice.ts';
import { modalReducer } from './modal/modalSlice.ts';
import {userReducer} from "./user/userSlice.ts";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token", "favorites"],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);