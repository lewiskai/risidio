import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl } from "../../utilities/requests";
import { APIResponse } from "../../utils/types/ApiResponse";
import { Profile, UpdateAvatarUrl, UpdateProfilePayload } from "./interface";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
  endpoints: (builder) => ({
    getProfile: builder.query<APIResponse<Profile>, null>({
      query: () => ({
        url: "profile",
        method: "GET",
      }),
    }),
    updateProfile: builder.mutation<
      APIResponse<UpdateProfilePayload>,
      UpdateProfilePayload
    >({
      query: (credentials) => ({
        url: "profile",
        method: "PUT",
        body: credentials.body,
        // headers: credentials.headers,
      }),
    }),
    updateAvatarUrl: builder.mutation<
      APIResponse<UpdateAvatarUrl>,
      UpdateAvatarUrl
    >({
      query: (credentials) => ({
        url: "update-avatar",
        method: "PUT",
        body: credentials.body,
        // headers: credentials.headers,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation, useUpdateAvatarUrlMutation } = profileApi;
