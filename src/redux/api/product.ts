import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants";

interface Products {
  id: number;
  productName: string;
  PhotoUrl: string;
  price: string;
  quantity: string;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
  endpoints: (builder) => ({
    getProduct: builder.query<Products[], void>({
      query: () => ({
        url: "products",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    }),
  }),
});

export const { useGetProductQuery } = productApi;
