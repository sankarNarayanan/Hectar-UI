import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BaseAPI } from "@/api/BaseAPI";
import productDetails from "./productReducer";
import globalState from "./globalState";

export const store = configureStore({
  reducer: {
    [BaseAPI.reducerPath]: BaseAPI.reducer,
    productDetails,
    globalState,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseAPI.middleware),
});

setupListeners(store.dispatch);
