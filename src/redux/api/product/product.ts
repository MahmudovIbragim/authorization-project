import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<Products[], void>({
      query: () => ({
        url: "products",
      }),
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "products",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCreateProductMutation, useGetProductQuery } = api;
