import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<CreateLoginResponse, CreateLoginRequest>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["link"],
    }),
  }),
});

export const { useLoginMutation } = api;
