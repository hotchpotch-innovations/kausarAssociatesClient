const { baseApi } = require("../../api/baseApi");

const incorporationCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createIncorporationCategory: builder.mutation({
      query: (payload) => ({
        url: `/incorporation-categories`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [],
    }),
    getIncorporationCategories: builder.query({
      query: () => ({
        url: `/incorporation-categories`,
        method: "GET",
      }),
      providesTags: [],
    }),
  }),
});

export const {
  useCreateIncorporationCategoryMutation,
  useGetIncorporationCategoriesQuery,
} = incorporationCategoryApi;
