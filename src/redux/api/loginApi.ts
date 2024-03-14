import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants";

interface CreateLoginRequest {
  email: string;
  password: string;
}

interface CreateLoginResponse {
  token: string;
}

export const loignApi = createApi({
  reducerPath: "loignApi",
  baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<CreateLoginResponse, CreateLoginRequest>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loignApi;
