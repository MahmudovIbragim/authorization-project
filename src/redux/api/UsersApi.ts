import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants";

interface Users {
  id: number;
  email: string;
}

interface CreateUsersRequest {
  userName: string;
  email: string;
  password: string;
}

interface CreateUserResponse {
  id: number;
  userName: string;
  email: string;
  password: number;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => "users",
    }),
    createUsers: builder.mutation<CreateUserResponse, CreateUsersRequest>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCreateUsersMutation, useGetUsersQuery } = usersApi;


