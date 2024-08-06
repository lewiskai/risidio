import { createSlice } from "@reduxjs/toolkit";
// import { reactLocalStorage } from "reactjs-localstorage";
import { RootState } from "../hooks";
import { Profile, ProfileState } from "./interface";

const initialState: ProfileState = { isLoading: true } as ProfileState;

const updateProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData(state, { payload: { userData } }) {
      state.userName = userData.name;
      state.userData = userData;
      state.isLoading = false;
    },
  },
});

export const { setProfileData } = updateProfileSlice.actions;
export default updateProfileSlice.reducer;

export const useSelectUserName = (
  state: RootState
): string | null | undefined => state.profile.userName;

export const useSelectProfileData = (
  state: RootState
): Profile | null | undefined => state.profile.userData;

// export const useIsLoading = (state: RootState): boolean | undefined =>
//   state.auth.isLoading;
