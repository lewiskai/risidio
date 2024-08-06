import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import profileReducer from './profile/slice';
import scriptsReducer from './scripts/slice';

import { authApi } from "./auth/api";
import { tfaApi } from "./tfa";
import { profileApi } from "./profile/api";
import { scriptsApi } from "./scripts/api";


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [tfaApi.reducerPath]: tfaApi.reducer,
    [scriptsApi.reducerPath]: scriptsApi.reducer,
    auth: authReducer,
    profile: profileReducer,
    scripts : scriptsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware, scriptsApi.middleware, profileApi.middleware, tfaApi.middleware),
  devTools: true, // dev tools added
});
