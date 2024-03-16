import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<GetProductRequest, GetProductResponse>({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    createProduct: builder.mutation<PostProductResponse, PostProductRequest>({
      query: (newData) => ({
        url: "products",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useCreateProductMutation, useGetProductQuery } = api;
