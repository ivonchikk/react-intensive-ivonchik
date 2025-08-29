import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "../model/interface";


export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: ['Comment'],
    endpoints: builder => ({
        getComments: builder.query<Comment[], void>({
            query: () => '/comments',
            providesTags: ['Comment']
        }),
        getCommentsByPostId: builder.query<Comment[], string>({
            query: (id) => `/posts/${id}/comments`,
            providesTags: ['Comment']
        }),
    }),
})


export const {useGetCommentsQuery, useGetCommentsByPostIdQuery} = commentsApi;