import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "../model/interface";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: ['Todo'],
    endpoints: builder => ({
        getTodos: builder.query<Todo[], void>({
            query: () => '/todos',
            providesTags: ['Todo']
        }),
    }),
})


export const {useGetTodosQuery} = todosApi;