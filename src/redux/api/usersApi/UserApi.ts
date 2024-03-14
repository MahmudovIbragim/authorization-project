import {api as index} from '..'

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => "users",
      providesTags:['link']
    }),
    createUsers: builder.mutation<CreateUserResponse, CreateUsersRequest>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body: body,
      }),
      invalidatesTags:['link']
    }),
  }),
});

export const {useCreateUsersMutation, useGetUsersQuery} = api