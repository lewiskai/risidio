import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl } from "../../utilities/requests";
import {
  AuthResponse,
  ForgotPayload,
  LoginPayload,
  RegisterPayload,
  ResetPayload,
  UpdatePasswordPayload,
} from "./interface";
import { APIResponse } from "../../utils/types/ApiResponse";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/auth/` }),
  endpoints: (builder) => ({
    login: builder.mutation<APIResponse<boolean>, LoginPayload>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (credentials) => ({
        url: "signup",
        method: "POST",
        body: credentials,
      }),
    }),

    forgot: builder.mutation<APIResponse<null>, ForgotPayload>({
      query: (payload) => ({
        url: "forgot-password",
        method: "POST",
        body: payload,
      }),
    }),

    reset: builder.mutation<APIResponse<null>, ResetPayload>({
      query: (credentials) => ({
        url: "password/reset",
        method: "POST",
        body: credentials,
      }),
    }),

    logOut: builder.mutation<APIResponse<null>, null>({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),

    updatePassword: builder.mutation<APIResponse<boolean>, UpdatePasswordPayload>({
      query: (credentials) => ({
        url: "update-password",
        method: "POST",
        body: credentials
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotMutation,
  useResetMutation,
  useLogOutMutation,
  useUpdatePasswordMutation
} = authApi;
