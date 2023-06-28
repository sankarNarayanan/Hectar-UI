import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BaseAPI } from "@/api/BaseAPI";
import productDetails from "./productReducer";

export const store = configureStore({
  reducer: {
    [BaseAPI.reducerPath]: BaseAPI.reducer,
    productDetails,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseAPI.middleware),
});

setupListeners(store.dispatch);
