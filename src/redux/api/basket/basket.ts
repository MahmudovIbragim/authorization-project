import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getBasket: builder.query<GetProductResponseData, void>({
      query: () => ({
        url: "basket",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    postBasket: builder.mutation<PostProductResponseData, number>({
      query: (id) => ({
        url: `basket/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["product"],
    }),
    
  }),
});

export const { useGetBasketQuery, usePostBasketMutation } = api;
