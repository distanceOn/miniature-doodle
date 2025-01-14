import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./url";

const routesApi = createApi({
  reducerPath: "routesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  endpoints: (build) => ({
    getRoutes: build.query({
      query: () => "routes/all",
    }),
    getPlaces: build.query({
      query: () => "spots/all",
    }),
    getPlace: build.query({
      query: (id) => `spots/${id}`,
    }),
  }),
});

export const { useGetRoutesQuery, useGetPlacesQuery, useGetPlaceQuery } =
  routesApi;
export default routesApi;
