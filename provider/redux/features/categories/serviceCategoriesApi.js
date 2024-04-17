const { baseApi } = require("../../api/baseApi");

const serviceCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createServiceCategory: builder.mutation({
      query: (payload) => ({
        url: `/service-categories`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [],
    }),
    getServiceCategories: builder.query({
      query: () => ({
        url: `/service-categories`,
        method: "GET",
      }),
      providesTags: [],
    }),
  }),
});

export const {
  useCreateServiceCategoryMutation,
  useGetServiceCategoriesQuery,
} = serviceCategoryApi;
