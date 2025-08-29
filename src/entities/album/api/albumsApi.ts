import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album } from "../model/interface";


export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: ['Album'],
    endpoints: builder => ({
        getAlbums: builder.query<Album[], void>({
            query: () => '/albums',
            providesTags: ['Album']
        }),
    }),
})


export const {useGetAlbumsQuery} = albumsApi;