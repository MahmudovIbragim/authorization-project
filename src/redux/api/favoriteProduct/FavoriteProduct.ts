import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getFavoriteProduct: builder.query<GetProductRequest, GetProductResponse>({
      query: () => ({
        url: "favorites-products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    createFavoriteProduct: builder.mutation({
      query: (id) => ({
        url: `favorites-products/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useCreateFavoriteProductMutation, useGetFavoriteProductQuery } = api;
