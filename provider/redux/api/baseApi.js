import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api/v1/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

// customs base query
const baseQueryWithAccessToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  // console.log(result);

  //   if (result.error?.status === 401) {
  //     api.dispatch(logout());

  //     // result = await baseQuery(args, api, extraOptions);
  //   }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: baseQuery,
  baseQuery: baseQueryWithAccessToken,
  tagTypes: [],
  endpoints: () => ({}),
});
