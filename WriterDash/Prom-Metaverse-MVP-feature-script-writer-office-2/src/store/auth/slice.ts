import { createSlice } from "@reduxjs/toolkit";
import { reactLocalStorage } from "reactjs-localstorage";
import { RootState } from "../hooks";
import { Auth } from "./interface";
import { User } from "../../utils/types/User";

const initialState: Auth = { isLoading: true } as Auth;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential(state, { payload: { user, access_token } }) {
      reactLocalStorage.set(
        "@prom_user",
        JSON.stringify({ user, access_token })
      );
      state.user = user;
      state.access_token = access_token;
      state.isLoading = false;
    },
  },
});

export const { setCredential } = authSlice.actions;
export default authSlice.reducer;
export const useSelectCurrentUser = (
  state: RootState
): User | null | undefined => state.auth.user;
export const useSelectAccessToken = (
  state: RootState
): string | null | undefined => state.auth.access_token;
export const useIsLoading = (state: RootState): boolean | undefined =>
  state.auth.isLoading;
