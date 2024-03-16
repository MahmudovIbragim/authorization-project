import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getFavoriteProduct: builder.query<GetProductRequest, GetProductResponse>({
      query: () => ({
        url: "favorite-products/:id",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    createFavoriteProduct: builder.mutation({
      query: (body) => ({
        url: "favorite-products/:id",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useCreateFavoriteProductMutation, useGetFavoriteProductQuery } = api;
