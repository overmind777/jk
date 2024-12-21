import { RootState } from "../store.ts";

export const selectAuthUser = (state: RootState) => state.auth
