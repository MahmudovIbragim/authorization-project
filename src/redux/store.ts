import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/UsersApi";
import { loignApi } from "./api/loginApi";
import { productApi } from "./api/product";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [loignApi.reducerPath]: loignApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      loignApi.middleware,
      productApi.middleware
    ),
});
