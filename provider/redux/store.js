import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import navbarReducer from "./features/navbarSlice";
import subCatDataReducer from "./features/serviceCatDataSlice"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    navbarToggle: navbarReducer,
    serviceCatData: subCatDataReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
