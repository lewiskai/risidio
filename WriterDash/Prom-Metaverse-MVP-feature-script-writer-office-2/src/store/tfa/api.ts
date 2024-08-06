import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl } from "../../utilities/requests";
import {
  Check2FAStatusPayload,
  EnableDisablePayload,
  ResendEmailPayload,
  SetTFAReminderPayload,
  SetTFAReminderResponse,
  VerifyPayload,
} from "./interface";

import { LoginPayload } from "../auth";

import { APIResponse } from "../../utils/types/ApiResponse";
import { User } from "../../utils/types/User";

export const tfaApi = createApi({
  reducerPath: "tfaApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/auth/` }),
  endpoints: (builder) => ({
    no2FALogin: builder.mutation<APIResponse<User>, LoginPayload>(
      {
        query: (credentials) => ({
          url: "no-2FAlogin",
          method: "POST",
          body: credentials,
        }),
      }
    ),

    enable2FALogin: builder.mutation<
      APIResponse<boolean>,
      EnableDisablePayload
    >({
      query: (payload) => ({
        url: "enable-2FAlogin",
        method: "POST",
        body: payload,
      }),
    }),

    disable2FALogin: builder.mutation<
      APIResponse<boolean>,
      EnableDisablePayload
    >({
      query: (payload) => ({
        url: "disable-2FAlogin",
        method: "POST",
        body: payload,
      }),
    }),

    check2FAStatus: builder.mutation<
      APIResponse<boolean>,
      Check2FAStatusPayload
    >({
      query: (payload) => ({
        url: "check-2FAStatus",
        method: "POST",
        body: payload,
      }),
    }),

    sendVerificationEmail: builder.mutation<
      APIResponse<User>,
      ResendEmailPayload
    >({
      query: (payload) => ({
        url: "signup-resend-verification-code",
        method: "POST",
        body: payload,
      }),
    }),

    setTFAReminder: builder.mutation<
      APIResponse<SetTFAReminderResponse>,
      SetTFAReminderPayload | null
    >({
      query: (payload) => ({
        url: "set-2FA-reminder",
        method: "POST",
        body: payload,
      }),
    }),

    verifySignup: builder.mutation<APIResponse<User>, VerifyPayload>({
      query: (payload) => ({
        url: `signup-verify`,
        method: "POST",
        body: payload,
      }),
    }),

    verifyLogin: builder.mutation<APIResponse<User>, VerifyPayload>({
      query: (payload) => ({
        url: `verifylogin`,
        method: "POST",
        body: payload,
      }),
    }),

    verifyPassword: builder.mutation<APIResponse<User>, VerifyPayload>({
      query: (payload) => ({
        url: `verify-password-recovery-code`,
        method: "POST",
        body: payload,
      }),
    }),

    verifyReset: builder.query<APIResponse<User>, string>({
      query: (token) => ({
        url: `reset/verify/${token}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useDisable2FALoginMutation,
  useEnable2FALoginMutation,
  useNo2FALoginMutation,
  useCheck2FAStatusMutation,
  useSendVerificationEmailMutation,
  useVerifySignupMutation,
  useVerifyLoginMutation,
  useVerifyResetQuery,
  useSetTFAReminderMutation,
  useVerifyPasswordMutation
} = tfaApi;
