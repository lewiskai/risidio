import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../utilities/axiosQuery/axiosBaseQuery";
import { baseUrl } from "../../utilities/requests";
import { APIResponse } from "../../utils/types/ApiResponse";
import { GetScripts, PostScriptPayload, GetScriptsById } from "./interface";

// Define the API slice
export const scriptsApi = createApi({
  reducerPath: "scriptsApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
  endpoints: (builder) => ({
    getScripts: builder.query<APIResponse<GetScripts>, null>({
      query: () => ({
        url: "scripts",
        method: "GET",
      }),
    }),
    getScriptsById: builder.query<APIResponse<GetScriptsById>, string>({
      query: (id) => ({
        url: `scripts/${id}`,
        method: "GET",
      }),
    }),
    postScripts: builder.mutation<APIResponse<PostScriptPayload>, PostScriptPayload>({
      query: (payload) => ({
        url: "scripts",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetScriptsQuery,
  useGetScriptsByIdQuery,
  usePostScriptsMutation,
} = scriptsApi;
