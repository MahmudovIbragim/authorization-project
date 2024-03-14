import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<Products[], void>({
      query: () => ({
        url: "products",
      }),
      providesTags:['link']
    }),
    createProduct: builder.mutation({
      query: (body) => ({        
        url: "products",
        method: "POST",
        body: body,
      }),
      invalidatesTags:['link']
    }),
  }),
});

export const { useCreateProductMutation, useGetProductQuery } = api;
