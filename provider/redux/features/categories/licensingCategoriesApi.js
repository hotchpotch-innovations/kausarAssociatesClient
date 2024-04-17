const { baseApi } = require("../../api/baseApi");

const licensingCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLicensingCategory: builder.mutation({
      query: (payload) => ({
        url: `/licensing-categories`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [],
    }),
    getLicensingCategories: builder.query({
      query: () => ({
        url: `/licensing-categories`,
        method: "GET",
      }),
      providesTags: [],
    }),
  }),
});

export const {
  useCreateLicensingCategoryMutation,
  useGetLicensingCategoriesQuery,
} = licensingCategoryApi;
