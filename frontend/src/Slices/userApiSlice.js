import { apiSlice } from "./apiSlice.js";

const USER_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        body: data,
        withCredentials: true,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApiSlice;
