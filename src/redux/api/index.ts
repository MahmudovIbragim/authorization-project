import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://brand-store.up.railway.app",
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  },
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ["link"],
  endpoints: () => ({}),
});
