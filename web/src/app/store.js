import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BaseAPI } from "@/api/BaseAPI";

export const store = configureStore({
  reducer: {
    [BaseAPI.reducerPath]: BaseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseAPI.middleware),
});

setupListeners(store.dispatch);
