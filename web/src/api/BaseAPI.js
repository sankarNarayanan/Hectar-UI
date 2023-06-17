// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const BaseAPI = createApi({
  reducerPath: "baseAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    privateBetaEnquiry: builder.mutation({
      query: (data) => ({
        url: "privatebetaenquiry",
        method: "POST",
        body: data,
      }),
    }),
    requestQuote: builder.mutation({
      query: (data) => ({
        url: "getInstantQuote",
        method: "POST",
        body: data,
      }),
    }),
    submitEnquiry: builder.mutation({
      query: (data) => ({
        url: "submitenquiry",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  usePrivateBetaEnquiryMutation,
  useRequestQuoteMutation,
  useSubmitEnquiryMutation,
} = BaseAPI;
